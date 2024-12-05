# `dataOciOsManagementHubLifecycleStage` Submodule <a name="`dataOciOsManagementHubLifecycleStage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubLifecycleStage <a name="DataOciOsManagementHubLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage oci_os_management_hub_lifecycle_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleStage(Construct Scope, string Id, DataOciOsManagementHubLifecycleStageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig">DataOciOsManagementHubLifecycleStageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig">DataOciOsManagementHubLifecycleStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubLifecycleStage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubLifecycleStage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubLifecycleStage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubLifecycleStage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubLifecycleStage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubLifecycleStage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubLifecycleStage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubLifecycleStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubLifecycleStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.archType">ArchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleEnvironmentId">LifecycleEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.managedInstanceIds">ManagedInstanceIds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList">DataOciOsManagementHubLifecycleStageManagedInstanceIdsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.rank">Rank</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.softwareSourceId">SoftwareSourceId</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList">DataOciOsManagementHubLifecycleStageSoftwareSourceIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.timeModified">TimeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.vendorName">VendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleStageIdInput">LifecycleStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleStageId">LifecycleStageId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.archType"></a>

```csharp
public string ArchType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `LifecycleEnvironmentId`<sup>Required</sup> <a name="LifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleEnvironmentId"></a>

```csharp
public string LifecycleEnvironmentId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedInstanceIds`<sup>Required</sup> <a name="ManagedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.managedInstanceIds"></a>

```csharp
public DataOciOsManagementHubLifecycleStageManagedInstanceIdsList ManagedInstanceIds { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList">DataOciOsManagementHubLifecycleStageManagedInstanceIdsList</a>

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.rank"></a>

```csharp
public double Rank { get; }
```

- *Type:* double

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.softwareSourceId"></a>

```csharp
public DataOciOsManagementHubLifecycleStageSoftwareSourceIdList SoftwareSourceId { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList">DataOciOsManagementHubLifecycleStageSoftwareSourceIdList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.timeModified"></a>

```csharp
public string TimeModified { get; }
```

- *Type:* string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.vendorName"></a>

```csharp
public string VendorName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleStageIdInput`<sup>Optional</sup> <a name="LifecycleStageIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleStageIdInput"></a>

```csharp
public string LifecycleStageIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleStageId`<sup>Required</sup> <a name="LifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleStageId"></a>

```csharp
public string LifecycleStageId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubLifecycleStageConfig <a name="DataOciOsManagementHubLifecycleStageConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleStageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LifecycleStageId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.lifecycleStageId">LifecycleStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage#lifecycle_stage_id DataOciOsManagementHubLifecycleStage#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage#id DataOciOsManagementHubLifecycleStage#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LifecycleStageId`<sup>Required</sup> <a name="LifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.lifecycleStageId"></a>

```csharp
public string LifecycleStageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage#lifecycle_stage_id DataOciOsManagementHubLifecycleStage#lifecycle_stage_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage#id DataOciOsManagementHubLifecycleStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubLifecycleStageManagedInstanceIds <a name="DataOciOsManagementHubLifecycleStageManagedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleStageManagedInstanceIds {

};
```


### DataOciOsManagementHubLifecycleStageSoftwareSourceId <a name="DataOciOsManagementHubLifecycleStageSoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceId"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleStageSoftwareSourceId {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubLifecycleStageManagedInstanceIdsList <a name="DataOciOsManagementHubLifecycleStageManagedInstanceIdsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleStageManagedInstanceIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.get"></a>

```csharp
private DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference <a name="DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIds">DataOciOsManagementHubLifecycleStageManagedInstanceIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubLifecycleStageManagedInstanceIds InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIds">DataOciOsManagementHubLifecycleStageManagedInstanceIds</a>

---


### DataOciOsManagementHubLifecycleStageSoftwareSourceIdList <a name="DataOciOsManagementHubLifecycleStageSoftwareSourceIdList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleStageSoftwareSourceIdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.get"></a>

```csharp
private DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference <a name="DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceId">DataOciOsManagementHubLifecycleStageSoftwareSourceId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux"></a>

```csharp
public IResolvable IsMandatoryForAutonomousLinux { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.softwareSourceType"></a>

```csharp
public string SoftwareSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubLifecycleStageSoftwareSourceId InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceId">DataOciOsManagementHubLifecycleStageSoftwareSourceId</a>

---



