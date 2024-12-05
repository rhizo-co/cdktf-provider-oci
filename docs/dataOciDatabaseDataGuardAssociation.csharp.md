# `dataOciDatabaseDataGuardAssociation` Submodule <a name="`dataOciDatabaseDataGuardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDataGuardAssociation <a name="DataOciDatabaseDataGuardAssociation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association oci_database_data_guard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociation(Construct Scope, string Id, DataOciDatabaseDataGuardAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig">DataOciDatabaseDataGuardAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig">DataOciDatabaseDataGuardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDataGuardAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDataGuardAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDataGuardAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDataGuardAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDataGuardAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDataGuardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDataGuardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.applyLag">ApplyLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.applyRate">ApplyRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.createAsync">CreateAsync</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.creationType">CreationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseAdminPassword">DatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseDefinedTags">DatabaseDefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseFreeformTags">DatabaseFreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList">DataOciDatabaseDataGuardAssociationDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemDefinedTags">DbSystemDefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemFreeformTags">DbSystemFreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemSecurityAttributes">DbSystemSecurityAttributes</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete">DeleteStandbyDbHomeOnDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.faultDomains">FaultDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.isActiveDataGuardEnabled">IsActiveDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDatabaseId">PeerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDataGuardAssociationId">PeerDataGuardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbHomeId">PeerDbHomeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbSystemId">PeerDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerRole">PeerRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerSidPrefix">PeerSidPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerVmClusterId">PeerVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.protectionMode">ProtectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.storageVolumePerformanceMode">StorageVolumePerformanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.transportType">TransportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataGuardAssociationIdInput">DataGuardAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataGuardAssociationId">DataGuardAssociationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApplyLag`<sup>Required</sup> <a name="ApplyLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.applyLag"></a>

```csharp
public string ApplyLag { get; }
```

- *Type:* string

---

##### `ApplyRate`<sup>Required</sup> <a name="ApplyRate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.applyRate"></a>

```csharp
public string ApplyRate { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.backupNetworkNsgIds"></a>

```csharp
public string[] BackupNetworkNsgIds { get; }
```

- *Type:* string[]

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.createAsync"></a>

```csharp
public IResolvable CreateAsync { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.creationType"></a>

```csharp
public string CreationType { get; }
```

- *Type:* string

---

##### `DatabaseAdminPassword`<sup>Required</sup> <a name="DatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseAdminPassword"></a>

```csharp
public string DatabaseAdminPassword { get; }
```

- *Type:* string

---

##### `DatabaseDefinedTags`<sup>Required</sup> <a name="DatabaseDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseDefinedTags"></a>

```csharp
public StringMap DatabaseDefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DatabaseFreeformTags`<sup>Required</sup> <a name="DatabaseFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseFreeformTags"></a>

```csharp
public StringMap DatabaseFreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataCollectionOptions"></a>

```csharp
public DataOciDatabaseDataGuardAssociationDataCollectionOptionsList DataCollectionOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList">DataOciDatabaseDataGuardAssociationDataCollectionOptionsList</a>

---

##### `DbSystemDefinedTags`<sup>Required</sup> <a name="DbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemDefinedTags"></a>

```csharp
public StringMap DbSystemDefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DbSystemFreeformTags`<sup>Required</sup> <a name="DbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemFreeformTags"></a>

```csharp
public StringMap DbSystemFreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DbSystemSecurityAttributes`<sup>Required</sup> <a name="DbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemSecurityAttributes"></a>

```csharp
public StringMap DbSystemSecurityAttributes { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="DeleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete"></a>

```csharp
public string DeleteStandbyDbHomeOnDelete { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.faultDomains"></a>

```csharp
public string[] FaultDomains { get; }
```

- *Type:* string[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActiveDataGuardEnabled`<sup>Required</sup> <a name="IsActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.isActiveDataGuardEnabled"></a>

```csharp
public IResolvable IsActiveDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PeerDatabaseId`<sup>Required</sup> <a name="PeerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDatabaseId"></a>

```csharp
public string PeerDatabaseId { get; }
```

- *Type:* string

---

##### `PeerDataGuardAssociationId`<sup>Required</sup> <a name="PeerDataGuardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDataGuardAssociationId"></a>

```csharp
public string PeerDataGuardAssociationId { get; }
```

- *Type:* string

---

##### `PeerDbHomeId`<sup>Required</sup> <a name="PeerDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbHomeId"></a>

```csharp
public string PeerDbHomeId { get; }
```

- *Type:* string

---

##### `PeerDbSystemId`<sup>Required</sup> <a name="PeerDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbSystemId"></a>

```csharp
public string PeerDbSystemId { get; }
```

- *Type:* string

---

##### `PeerDbUniqueName`<sup>Required</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbUniqueName"></a>

```csharp
public string PeerDbUniqueName { get; }
```

- *Type:* string

---

##### `PeerRole`<sup>Required</sup> <a name="PeerRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerRole"></a>

```csharp
public string PeerRole { get; }
```

- *Type:* string

---

##### `PeerSidPrefix`<sup>Required</sup> <a name="PeerSidPrefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerSidPrefix"></a>

```csharp
public string PeerSidPrefix { get; }
```

- *Type:* string

---

##### `PeerVmClusterId`<sup>Required</sup> <a name="PeerVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerVmClusterId"></a>

```csharp
public string PeerVmClusterId { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.protectionMode"></a>

```csharp
public string ProtectionMode { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageVolumePerformanceMode`<sup>Required</sup> <a name="StorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.storageVolumePerformanceMode"></a>

```csharp
public string StorageVolumePerformanceMode { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `TransportType`<sup>Required</sup> <a name="TransportType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.transportType"></a>

```csharp
public string TransportType { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `DataGuardAssociationIdInput`<sup>Optional</sup> <a name="DataGuardAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataGuardAssociationIdInput"></a>

```csharp
public string DataGuardAssociationIdInput { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DataGuardAssociationId`<sup>Required</sup> <a name="DataGuardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataGuardAssociationId"></a>

```csharp
public string DataGuardAssociationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDataGuardAssociationConfig <a name="DataOciDatabaseDataGuardAssociationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseId,
    string DataGuardAssociationId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#database_id DataOciDatabaseDataGuardAssociation#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.dataGuardAssociationId">DataGuardAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#data_guard_association_id DataOciDatabaseDataGuardAssociation#data_guard_association_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#database_id DataOciDatabaseDataGuardAssociation#database_id}.

---

##### `DataGuardAssociationId`<sup>Required</sup> <a name="DataGuardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.dataGuardAssociationId"></a>

```csharp
public string DataGuardAssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#data_guard_association_id DataOciDatabaseDataGuardAssociation#data_guard_association_id}.

---

### DataOciDatabaseDataGuardAssociationDataCollectionOptions <a name="DataOciDatabaseDataGuardAssociationDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationDataCollectionOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDataGuardAssociationDataCollectionOptionsList <a name="DataOciDatabaseDataGuardAssociationDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationDataCollectionOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.get"></a>

```csharp
private DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference <a name="DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptions">DataOciDatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```csharp
public IResolvable IsDiagnosticsEventsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```csharp
public IResolvable IsHealthMonitoringEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```csharp
public IResolvable IsIncidentLogsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDataGuardAssociationDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptions">DataOciDatabaseDataGuardAssociationDataCollectionOptions</a>

---



