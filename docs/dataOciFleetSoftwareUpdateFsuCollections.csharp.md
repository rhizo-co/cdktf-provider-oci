# `dataOciFleetSoftwareUpdateFsuCollections` Submodule <a name="`dataOciFleetSoftwareUpdateFsuCollections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetSoftwareUpdateFsuCollections <a name="DataOciFleetSoftwareUpdateFsuCollections" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections oci_fleet_software_update_fsu_collections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollections(Construct Scope, string Id, DataOciFleetSoftwareUpdateFsuCollectionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig">DataOciFleetSoftwareUpdateFsuCollectionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig">DataOciFleetSoftwareUpdateFsuCollectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCollections resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCollections.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCollections.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCollections.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCollections.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCollections resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCollections to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetSoftwareUpdateFsuCollections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCollections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList">DataOciFleetSoftwareUpdateFsuCollectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.fsuCollectionSummaryCollection">FsuCollectionSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.filter"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList">DataOciFleetSoftwareUpdateFsuCollectionsFilterList</a>

---

##### `FsuCollectionSummaryCollection`<sup>Required</sup> <a name="FsuCollectionSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.fsuCollectionSummaryCollection"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList FsuCollectionSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetSoftwareUpdateFsuCollectionsConfig <a name="DataOciFleetSoftwareUpdateFsuCollectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#compartment_id DataOciFleetSoftwareUpdateFsuCollections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#display_name DataOciFleetSoftwareUpdateFsuCollections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#id DataOciFleetSoftwareUpdateFsuCollections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#state DataOciFleetSoftwareUpdateFsuCollections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#type DataOciFleetSoftwareUpdateFsuCollections#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#compartment_id DataOciFleetSoftwareUpdateFsuCollections#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#display_name DataOciFleetSoftwareUpdateFsuCollections#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#filter DataOciFleetSoftwareUpdateFsuCollections#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#id DataOciFleetSoftwareUpdateFsuCollections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#state DataOciFleetSoftwareUpdateFsuCollections#state}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#type DataOciFleetSoftwareUpdateFsuCollections#type}.

---

### DataOciFleetSoftwareUpdateFsuCollectionsFilter <a name="DataOciFleetSoftwareUpdateFsuCollectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#name DataOciFleetSoftwareUpdateFsuCollections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#values DataOciFleetSoftwareUpdateFsuCollections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#regex DataOciFleetSoftwareUpdateFsuCollections#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#name DataOciFleetSoftwareUpdateFsuCollections#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#values DataOciFleetSoftwareUpdateFsuCollections#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#regex DataOciFleetSoftwareUpdateFsuCollections#regex}.

---

### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection {

};
```


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems {

};
```


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle {

};
```


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery {

};
```


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters {

};
```


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetSoftwareUpdateFsuCollectionsFilterList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.identifiers">Identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.versions">Versions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.identifiers"></a>

```csharp
public string[] Identifiers { get; }
```

- *Type:* string[]

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Names`<sup>Required</sup> <a name="Names" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.tags"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.versions"></a>

```csharp
public string[] Versions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.fsuDiscoveryId">FsuDiscoveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.filters"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList Filters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList</a>

---

##### `FsuDiscoveryId`<sup>Required</sup> <a name="FsuDiscoveryId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.fsuDiscoveryId"></a>

```csharp
public string FsuDiscoveryId { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.activeFsuCycle">ActiveFsuCycle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.fleetDiscovery">FleetDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.sourceMajorVersion">SourceMajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.targetCount">TargetCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveFsuCycle`<sup>Required</sup> <a name="ActiveFsuCycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.activeFsuCycle"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList ActiveFsuCycle { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FleetDiscovery`<sup>Required</sup> <a name="FleetDiscovery" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.fleetDiscovery"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList FleetDiscovery { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `SourceMajorVersion`<sup>Required</sup> <a name="SourceMajorVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.sourceMajorVersion"></a>

```csharp
public string SourceMajorVersion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetCount`<sup>Required</sup> <a name="TargetCount" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.targetCount"></a>

```csharp
public double TargetCount { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection</a>

---



