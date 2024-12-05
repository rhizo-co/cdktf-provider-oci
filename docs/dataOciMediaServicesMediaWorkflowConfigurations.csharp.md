# `dataOciMediaServicesMediaWorkflowConfigurations` Submodule <a name="`dataOciMediaServicesMediaWorkflowConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowConfigurations <a name="DataOciMediaServicesMediaWorkflowConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations oci_media_services_media_workflow_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurations(Construct Scope, string Id, DataOciMediaServicesMediaWorkflowConfigurationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig">DataOciMediaServicesMediaWorkflowConfigurationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig">DataOciMediaServicesMediaWorkflowConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowConfigurations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowConfigurations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowConfigurations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowConfigurations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowConfigurations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowConfigurations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesMediaWorkflowConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList">DataOciMediaServicesMediaWorkflowConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.mediaWorkflowConfigurationCollection">MediaWorkflowConfigurationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.filter"></a>

```csharp
public DataOciMediaServicesMediaWorkflowConfigurationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList">DataOciMediaServicesMediaWorkflowConfigurationsFilterList</a>

---

##### `MediaWorkflowConfigurationCollection`<sup>Required</sup> <a name="MediaWorkflowConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.mediaWorkflowConfigurationCollection"></a>

```csharp
public DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList MediaWorkflowConfigurationCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowConfigurationsConfig <a name="DataOciMediaServicesMediaWorkflowConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#compartment_id DataOciMediaServicesMediaWorkflowConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#display_name DataOciMediaServicesMediaWorkflowConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#id DataOciMediaServicesMediaWorkflowConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#state DataOciMediaServicesMediaWorkflowConfigurations#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#compartment_id DataOciMediaServicesMediaWorkflowConfigurations#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#display_name DataOciMediaServicesMediaWorkflowConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#filter DataOciMediaServicesMediaWorkflowConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#id DataOciMediaServicesMediaWorkflowConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#state DataOciMediaServicesMediaWorkflowConfigurations#state}.

---

### DataOciMediaServicesMediaWorkflowConfigurationsFilter <a name="DataOciMediaServicesMediaWorkflowConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#name DataOciMediaServicesMediaWorkflowConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#values DataOciMediaServicesMediaWorkflowConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#regex DataOciMediaServicesMediaWorkflowConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#name DataOciMediaServicesMediaWorkflowConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#values DataOciMediaServicesMediaWorkflowConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#regex DataOciMediaServicesMediaWorkflowConfigurations#regex}.

---

### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection {

};
```


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems {

};
```


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowConfigurationsFilterList <a name="DataOciMediaServicesMediaWorkflowConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.get"></a>

```csharp
private DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference <a name="DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.get"></a>

```csharp
private DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.get"></a>

```csharp
private DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks</a>

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.isLockOverride">IsLockOverride</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.lifecyleDetails">LifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.isLockOverride"></a>

```csharp
public IResolvable IsLockOverride { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.lifecyleDetails"></a>

```csharp
public string LifecyleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.locks"></a>

```csharp
public DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems</a>

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.get"></a>

```csharp
private DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.items"></a>

```csharp
public DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection</a>

---



