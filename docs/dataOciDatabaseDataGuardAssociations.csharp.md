# `dataOciDatabaseDataGuardAssociations` Submodule <a name="`dataOciDatabaseDataGuardAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDataGuardAssociations <a name="DataOciDatabaseDataGuardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations oci_database_data_guard_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociations(Construct Scope, string Id, DataOciDatabaseDataGuardAssociationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig">DataOciDatabaseDataGuardAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig">DataOciDatabaseDataGuardAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDataGuardAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDataGuardAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDataGuardAssociations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDataGuardAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDataGuardAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDataGuardAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDataGuardAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dataGuardAssociations">DataGuardAssociations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList">DataOciDatabaseDataGuardAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DataGuardAssociations`<sup>Required</sup> <a name="DataGuardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dataGuardAssociations"></a>

```csharp
public DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList DataGuardAssociations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filter"></a>

```csharp
public DataOciDatabaseDataGuardAssociationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList">DataOciDatabaseDataGuardAssociationsFilterList</a>

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDataGuardAssociationsConfig <a name="DataOciDatabaseDataGuardAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#database_id DataOciDatabaseDataGuardAssociations#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#id DataOciDatabaseDataGuardAssociations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#database_id DataOciDatabaseDataGuardAssociations#database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#filter DataOciDatabaseDataGuardAssociations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#id DataOciDatabaseDataGuardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDataGuardAssociationsDataGuardAssociations <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationsDataGuardAssociations {

};
```


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions {

};
```


### DataOciDatabaseDataGuardAssociationsFilter <a name="DataOciDatabaseDataGuardAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#name DataOciDatabaseDataGuardAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#values DataOciDatabaseDataGuardAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#regex DataOciDatabaseDataGuardAssociations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#name DataOciDatabaseDataGuardAssociations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#values DataOciDatabaseDataGuardAssociations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#regex DataOciDatabaseDataGuardAssociations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.get"></a>

```csharp
private DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```csharp
public IResolvable IsDiagnosticsEventsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```csharp
public IResolvable IsHealthMonitoringEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```csharp
public IResolvable IsIncidentLogsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions</a>

---


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.get"></a>

```csharp
private DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyLag">ApplyLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyRate">ApplyRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.createAsync">CreateAsync</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationType">CreationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseAdminPassword">DatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseDefinedTags">DatabaseDefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseFreeformTags">DatabaseFreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemDefinedTags">DbSystemDefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemFreeformTags">DbSystemFreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemSecurityAttributes">DbSystemSecurityAttributes</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.deleteStandbyDbHomeOnDelete">DeleteStandbyDbHomeOnDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.faultDomains">FaultDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.isActiveDataGuardEnabled">IsActiveDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDatabaseId">PeerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDataGuardAssociationId">PeerDataGuardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbHomeId">PeerDbHomeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbSystemId">PeerDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerRole">PeerRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerSidPrefix">PeerSidPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerVmClusterId">PeerVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.protectionMode">ProtectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.storageVolumePerformanceMode">StorageVolumePerformanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.transportType">TransportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations">DataOciDatabaseDataGuardAssociationsDataGuardAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyLag`<sup>Required</sup> <a name="ApplyLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyLag"></a>

```csharp
public string ApplyLag { get; }
```

- *Type:* string

---

##### `ApplyRate`<sup>Required</sup> <a name="ApplyRate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyRate"></a>

```csharp
public string ApplyRate { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.backupNetworkNsgIds"></a>

```csharp
public string[] BackupNetworkNsgIds { get; }
```

- *Type:* string[]

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.createAsync"></a>

```csharp
public IResolvable CreateAsync { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationType"></a>

```csharp
public string CreationType { get; }
```

- *Type:* string

---

##### `DatabaseAdminPassword`<sup>Required</sup> <a name="DatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseAdminPassword"></a>

```csharp
public string DatabaseAdminPassword { get; }
```

- *Type:* string

---

##### `DatabaseDefinedTags`<sup>Required</sup> <a name="DatabaseDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseDefinedTags"></a>

```csharp
public StringMap DatabaseDefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DatabaseFreeformTags`<sup>Required</sup> <a name="DatabaseFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseFreeformTags"></a>

```csharp
public StringMap DatabaseFreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dataCollectionOptions"></a>

```csharp
public DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList DataCollectionOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList</a>

---

##### `DbSystemDefinedTags`<sup>Required</sup> <a name="DbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemDefinedTags"></a>

```csharp
public StringMap DbSystemDefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DbSystemFreeformTags`<sup>Required</sup> <a name="DbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemFreeformTags"></a>

```csharp
public StringMap DbSystemFreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DbSystemSecurityAttributes`<sup>Required</sup> <a name="DbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemSecurityAttributes"></a>

```csharp
public StringMap DbSystemSecurityAttributes { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="DeleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.deleteStandbyDbHomeOnDelete"></a>

```csharp
public string DeleteStandbyDbHomeOnDelete { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.faultDomains"></a>

```csharp
public string[] FaultDomains { get; }
```

- *Type:* string[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActiveDataGuardEnabled`<sup>Required</sup> <a name="IsActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.isActiveDataGuardEnabled"></a>

```csharp
public IResolvable IsActiveDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PeerDatabaseId`<sup>Required</sup> <a name="PeerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDatabaseId"></a>

```csharp
public string PeerDatabaseId { get; }
```

- *Type:* string

---

##### `PeerDataGuardAssociationId`<sup>Required</sup> <a name="PeerDataGuardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDataGuardAssociationId"></a>

```csharp
public string PeerDataGuardAssociationId { get; }
```

- *Type:* string

---

##### `PeerDbHomeId`<sup>Required</sup> <a name="PeerDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbHomeId"></a>

```csharp
public string PeerDbHomeId { get; }
```

- *Type:* string

---

##### `PeerDbSystemId`<sup>Required</sup> <a name="PeerDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbSystemId"></a>

```csharp
public string PeerDbSystemId { get; }
```

- *Type:* string

---

##### `PeerDbUniqueName`<sup>Required</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbUniqueName"></a>

```csharp
public string PeerDbUniqueName { get; }
```

- *Type:* string

---

##### `PeerRole`<sup>Required</sup> <a name="PeerRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerRole"></a>

```csharp
public string PeerRole { get; }
```

- *Type:* string

---

##### `PeerSidPrefix`<sup>Required</sup> <a name="PeerSidPrefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerSidPrefix"></a>

```csharp
public string PeerSidPrefix { get; }
```

- *Type:* string

---

##### `PeerVmClusterId`<sup>Required</sup> <a name="PeerVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerVmClusterId"></a>

```csharp
public string PeerVmClusterId { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.protectionMode"></a>

```csharp
public string ProtectionMode { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageVolumePerformanceMode`<sup>Required</sup> <a name="StorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.storageVolumePerformanceMode"></a>

```csharp
public string StorageVolumePerformanceMode { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `TransportType`<sup>Required</sup> <a name="TransportType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.transportType"></a>

```csharp
public string TransportType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDataGuardAssociationsDataGuardAssociations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations">DataOciDatabaseDataGuardAssociationsDataGuardAssociations</a>

---


### DataOciDatabaseDataGuardAssociationsFilterList <a name="DataOciDatabaseDataGuardAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.get"></a>

```csharp
private DataOciDatabaseDataGuardAssociationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseDataGuardAssociationsFilterOutputReference <a name="DataOciDatabaseDataGuardAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



