# `dataOciDatabaseDbSystemsUpgradeHistoryEntry` Submodule <a name="`dataOciDatabaseDbSystemsUpgradeHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntry <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry oci_database_db_systems_upgrade_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemsUpgradeHistoryEntry(Construct Scope, string Id, DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig">DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig">DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemsUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbSystemsUpgradeHistoryEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbSystemsUpgradeHistoryEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbSystemsUpgradeHistoryEntry.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDbSystemsUpgradeHistoryEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemsUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDbSystemsUpgradeHistoryEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDbSystemsUpgradeHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemsUpgradeHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.newGiVersion">NewGiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.newOsVersion">NewOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.oldGiVersion">OldGiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.oldOsVersion">OldOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.snapshotRetentionPeriodInDays">SnapshotRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.upgradeHistoryEntryIdInput">UpgradeHistoryEntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.upgradeHistoryEntryId">UpgradeHistoryEntryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NewGiVersion`<sup>Required</sup> <a name="NewGiVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.newGiVersion"></a>

```csharp
public string NewGiVersion { get; }
```

- *Type:* string

---

##### `NewOsVersion`<sup>Required</sup> <a name="NewOsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.newOsVersion"></a>

```csharp
public string NewOsVersion { get; }
```

- *Type:* string

---

##### `OldGiVersion`<sup>Required</sup> <a name="OldGiVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.oldGiVersion"></a>

```csharp
public string OldGiVersion { get; }
```

- *Type:* string

---

##### `OldOsVersion`<sup>Required</sup> <a name="OldOsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.oldOsVersion"></a>

```csharp
public string OldOsVersion { get; }
```

- *Type:* string

---

##### `SnapshotRetentionPeriodInDays`<sup>Required</sup> <a name="SnapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.snapshotRetentionPeriodInDays"></a>

```csharp
public double SnapshotRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UpgradeHistoryEntryIdInput`<sup>Optional</sup> <a name="UpgradeHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.upgradeHistoryEntryIdInput"></a>

```csharp
public string UpgradeHistoryEntryIdInput { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpgradeHistoryEntryId`<sup>Required</sup> <a name="UpgradeHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.upgradeHistoryEntryId"></a>

```csharp
public string UpgradeHistoryEntryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DbSystemId,
    string UpgradeHistoryEntryId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntry#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.upgradeHistoryEntryId">UpgradeHistoryEntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDbSystemsUpgradeHistoryEntry#upgrade_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#id DataOciDatabaseDbSystemsUpgradeHistoryEntry#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntry#db_system_id}.

---

##### `UpgradeHistoryEntryId`<sup>Required</sup> <a name="UpgradeHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.upgradeHistoryEntryId"></a>

```csharp
public string UpgradeHistoryEntryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDbSystemsUpgradeHistoryEntry#upgrade_history_entry_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#id DataOciDatabaseDbSystemsUpgradeHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



