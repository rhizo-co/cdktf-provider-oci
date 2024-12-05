# `dataOciOpsiAwrHubAwrSnapshots` Submodule <a name="`dataOciOpsiAwrHubAwrSnapshots` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiAwrHubAwrSnapshots <a name="DataOciOpsiAwrHubAwrSnapshots" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots oci_opsi_awr_hub_awr_snapshots}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshots(Construct Scope, string Id, DataOciOpsiAwrHubAwrSnapshotsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig">DataOciOpsiAwrHubAwrSnapshotsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig">DataOciOpsiAwrHubAwrSnapshotsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeGreaterThanOrEqualTo">ResetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeLessThanOrEqualTo">ResetTimeLessThanOrEqualTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeGreaterThanOrEqualTo` <a name="ResetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeGreaterThanOrEqualTo()
```

##### `ResetTimeLessThanOrEqualTo` <a name="ResetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeLessThanOrEqualTo"></a>

```csharp
private void ResetTimeLessThanOrEqualTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshots resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiAwrHubAwrSnapshots.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiAwrHubAwrSnapshots.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiAwrHubAwrSnapshots.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiAwrHubAwrSnapshots.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshots resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiAwrHubAwrSnapshots to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiAwrHubAwrSnapshots that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiAwrHubAwrSnapshots to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSnapshotCollection">AwrSnapshotCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList">DataOciOpsiAwrHubAwrSnapshotsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubIdInput">AwrHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifierInput">AwrSourceDatabaseIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualToInput">TimeGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualToInput">TimeLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubId">AwrHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifier">AwrSourceDatabaseIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AwrSnapshotCollection`<sup>Required</sup> <a name="AwrSnapshotCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSnapshotCollection"></a>

```csharp
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList AwrSnapshotCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filter"></a>

```csharp
public DataOciOpsiAwrHubAwrSnapshotsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList">DataOciOpsiAwrHubAwrSnapshotsFilterList</a>

---

##### `AwrHubIdInput`<sup>Optional</sup> <a name="AwrHubIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubIdInput"></a>

```csharp
public string AwrHubIdInput { get; }
```

- *Type:* string

---

##### `AwrSourceDatabaseIdentifierInput`<sup>Optional</sup> <a name="AwrSourceDatabaseIdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifierInput"></a>

```csharp
public string AwrSourceDatabaseIdentifierInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualToInput"></a>

```csharp
public string TimeGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="TimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualToInput"></a>

```csharp
public string TimeLessThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `AwrHubId`<sup>Required</sup> <a name="AwrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubId"></a>

```csharp
public string AwrHubId { get; }
```

- *Type:* string

---

##### `AwrSourceDatabaseIdentifier`<sup>Required</sup> <a name="AwrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifier"></a>

```csharp
public string AwrSourceDatabaseIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualTo"></a>

```csharp
public string TimeGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeLessThanOrEqualTo`<sup>Required</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualTo"></a>

```csharp
public string TimeLessThanOrEqualTo { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection {

};
```


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems {

};
```


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems {

};
```


### DataOciOpsiAwrHubAwrSnapshotsConfig <a name="DataOciOpsiAwrHubAwrSnapshotsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AwrHubId,
    string AwrSourceDatabaseIdentifier,
    object Filter = null,
    string Id = null,
    string TimeGreaterThanOrEqualTo = null,
    string TimeLessThanOrEqualTo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrHubId">AwrHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrSourceDatabaseIdentifier">AwrSourceDatabaseIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AwrHubId`<sup>Required</sup> <a name="AwrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrHubId"></a>

```csharp
public string AwrHubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}.

---

##### `AwrSourceDatabaseIdentifier`<sup>Required</sup> <a name="AwrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrSourceDatabaseIdentifier"></a>

```csharp
public string AwrSourceDatabaseIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#filter DataOciOpsiAwrHubAwrSnapshots#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeGreaterThanOrEqualTo"></a>

```csharp
public string TimeGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}.

---

##### `TimeLessThanOrEqualTo`<sup>Optional</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeLessThanOrEqualTo"></a>

```csharp
public string TimeLessThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}.

---

### DataOciOpsiAwrHubAwrSnapshotsFilter <a name="DataOciOpsiAwrHubAwrSnapshotsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#name DataOciOpsiAwrHubAwrSnapshots#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#values DataOciOpsiAwrHubAwrSnapshots#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#regex DataOciOpsiAwrHubAwrSnapshots#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#name DataOciOpsiAwrHubAwrSnapshots#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#values DataOciOpsiAwrHubAwrSnapshots#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#regex DataOciOpsiAwrHubAwrSnapshots#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get"></a>

```csharp
private DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.awrSourceDatabaseId">AwrSourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.errorCount">ErrorCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.instanceNumber">InstanceNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeDbStartup">TimeDbStartup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotBegin">TimeSnapshotBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotEnd">TimeSnapshotEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwrSourceDatabaseId`<sup>Required</sup> <a name="AwrSourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.awrSourceDatabaseId"></a>

```csharp
public string AwrSourceDatabaseId { get; }
```

- *Type:* string

---

##### `ErrorCount`<sup>Required</sup> <a name="ErrorCount" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.errorCount"></a>

```csharp
public string ErrorCount { get; }
```

- *Type:* string

---

##### `InstanceNumber`<sup>Required</sup> <a name="InstanceNumber" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.instanceNumber"></a>

```csharp
public double InstanceNumber { get; }
```

- *Type:* double

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.snapshotIdentifier"></a>

```csharp
public double SnapshotIdentifier { get; }
```

- *Type:* double

---

##### `TimeDbStartup`<sup>Required</sup> <a name="TimeDbStartup" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeDbStartup"></a>

```csharp
public string TimeDbStartup { get; }
```

- *Type:* string

---

##### `TimeSnapshotBegin`<sup>Required</sup> <a name="TimeSnapshotBegin" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotBegin"></a>

```csharp
public string TimeSnapshotBegin { get; }
```

- *Type:* string

---

##### `TimeSnapshotEnd`<sup>Required</sup> <a name="TimeSnapshotEnd" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotEnd"></a>

```csharp
public string TimeSnapshotEnd { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems</a>

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get"></a>

```csharp
private DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.items"></a>

```csharp
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems</a>

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get"></a>

```csharp
private DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.items"></a>

```csharp
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection</a>

---


### DataOciOpsiAwrHubAwrSnapshotsFilterList <a name="DataOciOpsiAwrHubAwrSnapshotsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get"></a>

```csharp
private DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



