# `dataOciPsqlDbSystems` Submodule <a name="`dataOciPsqlDbSystems` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDbSystems <a name="DataOciPsqlDbSystems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems oci_psql_db_systems}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystems(Construct Scope, string Id, DataOciPsqlDbSystemsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig">DataOciPsqlDbSystemsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig">DataOciPsqlDbSystemsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlDbSystems resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlDbSystems.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlDbSystems.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlDbSystems.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlDbSystems.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciPsqlDbSystems resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciPsqlDbSystems to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciPsqlDbSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDbSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dbSystemCollection">DbSystemCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList">DataOciPsqlDbSystemsDbSystemCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList">DataOciPsqlDbSystemsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DbSystemCollection`<sup>Required</sup> <a name="DbSystemCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dbSystemCollection"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionList DbSystemCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList">DataOciPsqlDbSystemsDbSystemCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filter"></a>

```csharp
public DataOciPsqlDbSystemsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList">DataOciPsqlDbSystemsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDbSystemsConfig <a name="DataOciPsqlDbSystemsConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#filter DataOciPsqlDbSystems#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}.

---

### DataOciPsqlDbSystemsDbSystemCollection <a name="DataOciPsqlDbSystemsDbSystemCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollection {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItems <a name="DataOciPsqlDbSystemsDbSystemCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItems {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstances <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstances" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsInstances {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsSource <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsSource {

};
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails {

};
```


### DataOciPsqlDbSystemsFilter <a name="DataOciPsqlDbSystemsFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#name DataOciPsqlDbSystems#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#values DataOciPsqlDbSystems#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#regex DataOciPsqlDbSystems#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#name DataOciPsqlDbSystems#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#values DataOciPsqlDbSystems#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#regex DataOciPsqlDbSystems#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.passwordDetails">PasswordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordDetails`<sup>Required</sup> <a name="PasswordDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.passwordDetails"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList PasswordDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.passwordType">PasswordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordType`<sup>Required</sup> <a name="PasswordType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.passwordType"></a>

```csharp
public string PasswordType { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances">DataOciPsqlDbSystemsDbSystemCollectionItemsInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsInstances InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances">DataOciPsqlDbSystemsDbSystemCollectionItemsInstances</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.backupStart">BackupStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth">DaysOfTheMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek">DaysOfTheWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupStart`<sup>Required</sup> <a name="BackupStart" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.backupStart"></a>

```csharp
public string BackupStart { get; }
```

- *Type:* string

---

##### `DaysOfTheMonth`<sup>Required</sup> <a name="DaysOfTheMonth" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth"></a>

```csharp
public double[] DaysOfTheMonth { get; }
```

- *Type:* double[]

---

##### `DaysOfTheWeek`<sup>Required</sup> <a name="DaysOfTheWeek" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek"></a>

```csharp
public string[] DaysOfTheWeek { get; }
```

- *Type:* string[]

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.backupPolicy"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList BackupPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList</a>

---

##### `MaintenanceWindowStart`<sup>Required</sup> <a name="MaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.maintenanceWindowStart"></a>

```csharp
public string MaintenanceWindowStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp">PrimaryDbEndpointPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrimaryDbEndpointPrivateIp`<sup>Required</sup> <a name="PrimaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp"></a>

```csharp
public string PrimaryDbEndpointPrivateIp { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.applyConfig">ApplyConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceMemorySizeInGbs">InstanceMemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceOcpuCount">InstanceOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instances">Instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instancesDetails">InstancesDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.managementPolicy">ManagementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList">DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.storageDetails">StorageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemType">SystemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems">DataOciPsqlDbSystemsDbSystemCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `ApplyConfig`<sup>Required</sup> <a name="ApplyConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.applyConfig"></a>

```csharp
public string ApplyConfig { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.credentials"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList</a>

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceMemorySizeInGbs`<sup>Required</sup> <a name="InstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceMemorySizeInGbs"></a>

```csharp
public double InstanceMemorySizeInGbs { get; }
```

- *Type:* double

---

##### `InstanceOcpuCount`<sup>Required</sup> <a name="InstanceOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceOcpuCount"></a>

```csharp
public double InstanceOcpuCount { get; }
```

- *Type:* double

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instances"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList Instances { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList</a>

---

##### `InstancesDetails`<sup>Required</sup> <a name="InstancesDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instancesDetails"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList InstancesDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagementPolicy`<sup>Required</sup> <a name="ManagementPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.managementPolicy"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList ManagementPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList</a>

---

##### `NetworkDetails`<sup>Required</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.networkDetails"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList NetworkDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList</a>

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.patchOperations"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList PatchOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList</a>

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.source"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList Source { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList">DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageDetails`<sup>Required</sup> <a name="StorageDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.storageDetails"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList StorageDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemType"></a>

```csharp
public string SystemType { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems">DataOciPsqlDbSystemsDbSystemCollectionItems</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.value">Value</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```csharp
public string SelectedItem { get; }
```

- *Type:* string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```csharp
public string Selection { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.value"></a>

```csharp
public StringMap Value { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.isHavingRestoreConfigOverrides">IsHavingRestoreConfigOverrides</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource">DataOciPsqlDbSystemsDbSystemCollectionItemsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `IsHavingRestoreConfigOverrides`<sup>Required</sup> <a name="IsHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.isHavingRestoreConfigOverrides"></a>

```csharp
public IResolvable IsHavingRestoreConfigOverrides { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource">DataOciPsqlDbSystemsDbSystemCollectionItemsSource</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.iops">Iops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.isRegionallyDurable">IsRegionallyDurable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.systemType">SystemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.iops"></a>

```csharp
public string Iops { get; }
```

- *Type:* string

---

##### `IsRegionallyDurable`<sup>Required</sup> <a name="IsRegionallyDurable" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.isRegionallyDurable"></a>

```csharp
public IResolvable IsRegionallyDurable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.systemType"></a>

```csharp
public string SystemType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionList <a name="DataOciPsqlDbSystemsDbSystemCollectionList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get"></a>

```csharp
private DataOciPsqlDbSystemsDbSystemCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsDbSystemCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList">DataOciPsqlDbSystemsDbSystemCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection">DataOciPsqlDbSystemsDbSystemCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.items"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList">DataOciPsqlDbSystemsDbSystemCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlDbSystemsDbSystemCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection">DataOciPsqlDbSystemsDbSystemCollection</a>

---


### DataOciPsqlDbSystemsFilterList <a name="DataOciPsqlDbSystemsFilterList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get"></a>

```csharp
private DataOciPsqlDbSystemsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciPsqlDbSystemsFilterOutputReference <a name="DataOciPsqlDbSystemsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlDbSystemsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



