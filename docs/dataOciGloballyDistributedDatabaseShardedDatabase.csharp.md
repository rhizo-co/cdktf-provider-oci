# `dataOciGloballyDistributedDatabaseShardedDatabase` Submodule <a name="`dataOciGloballyDistributedDatabaseShardedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGloballyDistributedDatabaseShardedDatabase <a name="DataOciGloballyDistributedDatabaseShardedDatabase" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database oci_globally_distributed_database_sharded_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabase(Construct Scope, string Id, DataOciGloballyDistributedDatabaseShardedDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig">DataOciGloballyDistributedDatabaseShardedDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig">DataOciGloballyDistributedDatabaseShardedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGloballyDistributedDatabaseShardedDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGloballyDistributedDatabaseShardedDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGloballyDistributedDatabaseShardedDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGloballyDistributedDatabaseShardedDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGloballyDistributedDatabaseShardedDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGloballyDistributedDatabaseShardedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGloballyDistributedDatabaseShardedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.caSignedCertificate">CaSignedCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.catalogDetails">CatalogDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.chunks">Chunks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonName">ClusterCertificateCommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTrigger">ConfigureGsmsTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImage">ConfigureGsmsTriggerIsLatestGsmImage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNames">ConfigureGsmsTriggerOldGsmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureShardingTrigger">ConfigureShardingTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbDeploymentType">DbDeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTrigger">DownloadGsmCertificateSigningRequestTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTrigger">FetchConnectionStringTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTrigger">GenerateGsmCertificateSigningRequestTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletPassword">GenerateWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletTrigger">GenerateWalletTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.gsms">Gsms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList">DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPortTls">ListenerPortTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortLocal">OnsPortLocal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortRemote">OnsPortRemote</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.privateEndpoint">PrivateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationMethod">ReplicationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationUnit">ReplicationUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardDetails">ShardDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardingMethod">ShardingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.startDatabaseTrigger">StartDatabaseTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTrigger">StopDatabaseTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTrigger">UploadSignedCertificateAndGenerateWalletTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.validateNetworkTrigger">ValidateNetworkTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseIdInput">ShardedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseId">ShardedDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CaSignedCertificate`<sup>Required</sup> <a name="CaSignedCertificate" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.caSignedCertificate"></a>

```csharp
public string CaSignedCertificate { get; }
```

- *Type:* string

---

##### `CatalogDetails`<sup>Required</sup> <a name="CatalogDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.catalogDetails"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList CatalogDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList</a>

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `Chunks`<sup>Required</sup> <a name="Chunks" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.chunks"></a>

```csharp
public double Chunks { get; }
```

- *Type:* double

---

##### `ClusterCertificateCommonName`<sup>Required</sup> <a name="ClusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonName"></a>

```csharp
public string ClusterCertificateCommonName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigureGsmsTrigger`<sup>Required</sup> <a name="ConfigureGsmsTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTrigger"></a>

```csharp
public double ConfigureGsmsTrigger { get; }
```

- *Type:* double

---

##### `ConfigureGsmsTriggerIsLatestGsmImage`<sup>Required</sup> <a name="ConfigureGsmsTriggerIsLatestGsmImage" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImage"></a>

```csharp
public IResolvable ConfigureGsmsTriggerIsLatestGsmImage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ConfigureGsmsTriggerOldGsmNames`<sup>Required</sup> <a name="ConfigureGsmsTriggerOldGsmNames" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNames"></a>

```csharp
public string[] ConfigureGsmsTriggerOldGsmNames { get; }
```

- *Type:* string[]

---

##### `ConfigureShardingTrigger`<sup>Required</sup> <a name="ConfigureShardingTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureShardingTrigger"></a>

```csharp
public double ConfigureShardingTrigger { get; }
```

- *Type:* double

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.connectionStrings"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList</a>

---

##### `DbDeploymentType`<sup>Required</sup> <a name="DbDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbDeploymentType"></a>

```csharp
public string DbDeploymentType { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DownloadGsmCertificateSigningRequestTrigger`<sup>Required</sup> <a name="DownloadGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTrigger"></a>

```csharp
public double DownloadGsmCertificateSigningRequestTrigger { get; }
```

- *Type:* double

---

##### `FetchConnectionStringTrigger`<sup>Required</sup> <a name="FetchConnectionStringTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTrigger"></a>

```csharp
public double FetchConnectionStringTrigger { get; }
```

- *Type:* double

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GenerateGsmCertificateSigningRequestTrigger`<sup>Required</sup> <a name="GenerateGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTrigger"></a>

```csharp
public double GenerateGsmCertificateSigningRequestTrigger { get; }
```

- *Type:* double

---

##### `GenerateWalletPassword`<sup>Required</sup> <a name="GenerateWalletPassword" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletPassword"></a>

```csharp
public string GenerateWalletPassword { get; }
```

- *Type:* string

---

##### `GenerateWalletTrigger`<sup>Required</sup> <a name="GenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletTrigger"></a>

```csharp
public double GenerateWalletTrigger { get; }
```

- *Type:* double

---

##### `Gsms`<sup>Required</sup> <a name="Gsms" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.gsms"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList Gsms { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList">DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleStateDetails"></a>

```csharp
public string LifecycleStateDetails { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `ListenerPortTls`<sup>Required</sup> <a name="ListenerPortTls" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPortTls"></a>

```csharp
public double ListenerPortTls { get; }
```

- *Type:* double

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `OnsPortLocal`<sup>Required</sup> <a name="OnsPortLocal" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortLocal"></a>

```csharp
public double OnsPortLocal { get; }
```

- *Type:* double

---

##### `OnsPortRemote`<sup>Required</sup> <a name="OnsPortRemote" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortRemote"></a>

```csharp
public double OnsPortRemote { get; }
```

- *Type:* double

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.patchOperations"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList PatchOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.privateEndpoint"></a>

```csharp
public string PrivateEndpoint { get; }
```

- *Type:* string

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; }
```

- *Type:* double

---

##### `ReplicationMethod`<sup>Required</sup> <a name="ReplicationMethod" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationMethod"></a>

```csharp
public string ReplicationMethod { get; }
```

- *Type:* string

---

##### `ReplicationUnit`<sup>Required</sup> <a name="ReplicationUnit" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationUnit"></a>

```csharp
public double ReplicationUnit { get; }
```

- *Type:* double

---

##### `ShardDetails`<sup>Required</sup> <a name="ShardDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardDetails"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList ShardDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList</a>

---

##### `ShardingMethod`<sup>Required</sup> <a name="ShardingMethod" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardingMethod"></a>

```csharp
public string ShardingMethod { get; }
```

- *Type:* string

---

##### `StartDatabaseTrigger`<sup>Required</sup> <a name="StartDatabaseTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.startDatabaseTrigger"></a>

```csharp
public double StartDatabaseTrigger { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StopDatabaseTrigger`<sup>Required</sup> <a name="StopDatabaseTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTrigger"></a>

```csharp
public double StopDatabaseTrigger { get; }
```

- *Type:* double

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `UploadSignedCertificateAndGenerateWalletTrigger`<sup>Required</sup> <a name="UploadSignedCertificateAndGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTrigger"></a>

```csharp
public double UploadSignedCertificateAndGenerateWalletTrigger { get; }
```

- *Type:* double

---

##### `ValidateNetworkTrigger`<sup>Required</sup> <a name="ValidateNetworkTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.validateNetworkTrigger"></a>

```csharp
public double ValidateNetworkTrigger { get; }
```

- *Type:* double

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `ShardedDatabaseIdInput`<sup>Optional</sup> <a name="ShardedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseIdInput"></a>

```csharp
public string ShardedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `ShardedDatabaseId`<sup>Required</sup> <a name="ShardedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseId"></a>

```csharp
public string ShardedDatabaseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails {

};
```


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails {

};
```


### DataOciGloballyDistributedDatabaseShardedDatabaseConfig <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ShardedDatabaseId,
    string Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.shardedDatabaseId">ShardedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#sharded_database_id DataOciGloballyDistributedDatabaseShardedDatabase#sharded_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.metadata">Metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#metadata DataOciGloballyDistributedDatabaseShardedDatabase#metadata}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ShardedDatabaseId`<sup>Required</sup> <a name="ShardedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.shardedDatabaseId"></a>

```csharp
public string ShardedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#sharded_database_id DataOciGloballyDistributedDatabaseShardedDatabase#sharded_database_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#metadata DataOciGloballyDistributedDatabaseShardedDatabase#metadata}.

---

### DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings {

};
```


### DataOciGloballyDistributedDatabaseShardedDatabaseGsms <a name="DataOciGloballyDistributedDatabaseShardedDatabaseGsms" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseGsms {

};
```


### DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations <a name="DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations {

};
```


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails {

};
```


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.get"></a>

```csharp
private DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get"></a>

```csharp
private DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseParentId">ContainerDatabaseParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetails">EncryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.shardGroup">ShardGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.supportingResourceId">SupportingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeSslCertificateExpires">TimeSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterId"></a>

```csharp
public string CloudAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseId"></a>

```csharp
public string ContainerDatabaseId { get; }
```

- *Type:* string

---

##### `ContainerDatabaseParentId`<sup>Required</sup> <a name="ContainerDatabaseParentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseParentId"></a>

```csharp
public string ContainerDatabaseParentId { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `EncryptionKeyDetails`<sup>Required</sup> <a name="EncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetails"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList EncryptionKeyDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList</a>

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabled"></a>

```csharp
public IResolvable IsAutoScalingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PeerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```csharp
public string PeerCloudAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `ShardGroup`<sup>Required</sup> <a name="ShardGroup" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.shardGroup"></a>

```csharp
public string ShardGroup { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SupportingResourceId`<sup>Required</sup> <a name="SupportingResourceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.supportingResourceId"></a>

```csharp
public string SupportingResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeSslCertificateExpires`<sup>Required</sup> <a name="TimeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeSslCertificateExpires"></a>

```csharp
public string TimeSslCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get"></a>

```csharp
private DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public StringMap AllConnectionStrings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.get"></a>

```csharp
private DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.supportingResourceId">SupportingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeSslCertificateExpires">TimeSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms">DataOciGloballyDistributedDatabaseShardedDatabaseGsms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SupportingResourceId`<sup>Required</sup> <a name="SupportingResourceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.supportingResourceId"></a>

```csharp
public string SupportingResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeSslCertificateExpires`<sup>Required</sup> <a name="TimeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeSslCertificateExpires"></a>

```csharp
public string TimeSslCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.internalValue"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseGsms InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms">DataOciGloballyDistributedDatabaseShardedDatabaseGsms</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList <a name="DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.get"></a>

```csharp
private DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selection">Selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selection"></a>

```csharp
public string Selection { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.internalValue"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.get"></a>

```csharp
private DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.get"></a>

```csharp
private DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseParentId">ContainerDatabaseParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetails">EncryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardGroup">ShardGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpace">ShardSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.supportingResourceId">SupportingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeSslCertificateExpires">TimeSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterId"></a>

```csharp
public string CloudAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseId"></a>

```csharp
public string ContainerDatabaseId { get; }
```

- *Type:* string

---

##### `ContainerDatabaseParentId`<sup>Required</sup> <a name="ContainerDatabaseParentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseParentId"></a>

```csharp
public string ContainerDatabaseParentId { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `EncryptionKeyDetails`<sup>Required</sup> <a name="EncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetails"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList EncryptionKeyDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList</a>

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabled"></a>

```csharp
public IResolvable IsAutoScalingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PeerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```csharp
public string PeerCloudAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `ShardGroup`<sup>Required</sup> <a name="ShardGroup" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardGroup"></a>

```csharp
public string ShardGroup { get; }
```

- *Type:* string

---

##### `ShardSpace`<sup>Required</sup> <a name="ShardSpace" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpace"></a>

```csharp
public string ShardSpace { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SupportingResourceId`<sup>Required</sup> <a name="SupportingResourceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.supportingResourceId"></a>

```csharp
public string SupportingResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeSslCertificateExpires`<sup>Required</sup> <a name="TimeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeSslCertificateExpires"></a>

```csharp
public string TimeSslCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails</a>

---



