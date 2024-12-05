# `dataOciMediaServicesMediaWorkflowTaskDeclaration` Submodule <a name="`dataOciMediaServicesMediaWorkflowTaskDeclaration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclaration <a name="DataOciMediaServicesMediaWorkflowTaskDeclaration" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration oci_media_services_media_workflow_task_declaration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowTaskDeclaration(Construct Scope, string Id, DataOciMediaServicesMediaWorkflowTaskDeclarationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig">DataOciMediaServicesMediaWorkflowTaskDeclarationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig">DataOciMediaServicesMediaWorkflowTaskDeclarationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetIsCurrent">ResetIsCurrent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCurrent` <a name="ResetIsCurrent" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetIsCurrent"></a>

```csharp
private void ResetIsCurrent()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowTaskDeclaration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowTaskDeclaration.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowTaskDeclaration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowTaskDeclaration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowTaskDeclaration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowTaskDeclaration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowTaskDeclaration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesMediaWorkflowTaskDeclaration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowTaskDeclaration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList">DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrentInput">IsCurrentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrent">IsCurrent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.version">Version</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.items"></a>

```csharp
public DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList">DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsCurrentInput`<sup>Optional</sup> <a name="IsCurrentInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrentInput"></a>

```csharp
public object IsCurrentInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCurrent`<sup>Required</sup> <a name="IsCurrent" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrent"></a>

```csharp
public object IsCurrent { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclarationConfig <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowTaskDeclarationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string Id = null,
    object IsCurrent = null,
    string Name = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#compartment_id DataOciMediaServicesMediaWorkflowTaskDeclaration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#id DataOciMediaServicesMediaWorkflowTaskDeclaration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.isCurrent">IsCurrent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#is_current DataOciMediaServicesMediaWorkflowTaskDeclaration#is_current}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#name DataOciMediaServicesMediaWorkflowTaskDeclaration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#version DataOciMediaServicesMediaWorkflowTaskDeclaration#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#compartment_id DataOciMediaServicesMediaWorkflowTaskDeclaration#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#id DataOciMediaServicesMediaWorkflowTaskDeclaration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCurrent`<sup>Optional</sup> <a name="IsCurrent" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.isCurrent"></a>

```csharp
public object IsCurrent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#is_current DataOciMediaServicesMediaWorkflowTaskDeclaration#is_current}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#name DataOciMediaServicesMediaWorkflowTaskDeclaration#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#version DataOciMediaServicesMediaWorkflowTaskDeclaration#version}.

---

### DataOciMediaServicesMediaWorkflowTaskDeclarationItems <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowTaskDeclarationItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get"></a>

```csharp
private DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchema">ParametersSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchemaAllowingReferences">ParametersSchemaAllowingReferences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems">DataOciMediaServicesMediaWorkflowTaskDeclarationItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParametersSchema`<sup>Required</sup> <a name="ParametersSchema" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchema"></a>

```csharp
public string ParametersSchema { get; }
```

- *Type:* string

---

##### `ParametersSchemaAllowingReferences`<sup>Required</sup> <a name="ParametersSchemaAllowingReferences" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchemaAllowingReferences"></a>

```csharp
public string ParametersSchemaAllowingReferences { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesMediaWorkflowTaskDeclarationItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems">DataOciMediaServicesMediaWorkflowTaskDeclarationItems</a>

---



