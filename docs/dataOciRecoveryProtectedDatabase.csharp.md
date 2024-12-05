# `dataOciRecoveryProtectedDatabase` Submodule <a name="`dataOciRecoveryProtectedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryProtectedDatabase <a name="DataOciRecoveryProtectedDatabase" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database oci_recovery_protected_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRecoveryProtectedDatabase(Construct Scope, string Id, DataOciRecoveryProtectedDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig">DataOciRecoveryProtectedDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig">DataOciRecoveryProtectedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRecoveryProtectedDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRecoveryProtectedDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRecoveryProtectedDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRecoveryProtectedDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciRecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciRecoveryProtectedDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciRecoveryProtectedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryProtectedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.databaseSize">DatabaseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.deletionSchedule">DeletionSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.health">Health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.healthDetails">HealthDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.isReadOnlyResource">IsReadOnlyResource</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.isRedoLogsShipped">IsRedoLogsShipped</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.metrics">Metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList">DataOciRecoveryProtectedDatabaseMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.policyLockedDateTime">PolicyLockedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectionPolicyId">ProtectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.recoveryServiceSubnets">RecoveryServiceSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.vpcUserName">VpcUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectedDatabaseIdInput">ProtectedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectedDatabaseId">ProtectedDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseSize`<sup>Required</sup> <a name="DatabaseSize" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.databaseSize"></a>

```csharp
public string DatabaseSize { get; }
```

- *Type:* string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeletionSchedule`<sup>Required</sup> <a name="DeletionSchedule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.deletionSchedule"></a>

```csharp
public string DeletionSchedule { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Health`<sup>Required</sup> <a name="Health" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.health"></a>

```csharp
public string Health { get; }
```

- *Type:* string

---

##### `HealthDetails`<sup>Required</sup> <a name="HealthDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.healthDetails"></a>

```csharp
public string HealthDetails { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsReadOnlyResource`<sup>Required</sup> <a name="IsReadOnlyResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.isReadOnlyResource"></a>

```csharp
public IResolvable IsReadOnlyResource { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRedoLogsShipped`<sup>Required</sup> <a name="IsRedoLogsShipped" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.isRedoLogsShipped"></a>

```csharp
public IResolvable IsRedoLogsShipped { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.metrics"></a>

```csharp
public DataOciRecoveryProtectedDatabaseMetricsList Metrics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList">DataOciRecoveryProtectedDatabaseMetricsList</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PolicyLockedDateTime`<sup>Required</sup> <a name="PolicyLockedDateTime" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.policyLockedDateTime"></a>

```csharp
public string PolicyLockedDateTime { get; }
```

- *Type:* string

---

##### `ProtectionPolicyId`<sup>Required</sup> <a name="ProtectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectionPolicyId"></a>

```csharp
public string ProtectionPolicyId { get; }
```

- *Type:* string

---

##### `RecoveryServiceSubnets`<sup>Required</sup> <a name="RecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.recoveryServiceSubnets"></a>

```csharp
public DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList RecoveryServiceSubnets { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VpcUserName`<sup>Required</sup> <a name="VpcUserName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.vpcUserName"></a>

```csharp
public string VpcUserName { get; }
```

- *Type:* string

---

##### `ProtectedDatabaseIdInput`<sup>Optional</sup> <a name="ProtectedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectedDatabaseIdInput"></a>

```csharp
public string ProtectedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `ProtectedDatabaseId`<sup>Required</sup> <a name="ProtectedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectedDatabaseId"></a>

```csharp
public string ProtectedDatabaseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryProtectedDatabaseConfig <a name="DataOciRecoveryProtectedDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRecoveryProtectedDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProtectedDatabaseId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.protectedDatabaseId">ProtectedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database#protected_database_id DataOciRecoveryProtectedDatabase#protected_database_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProtectedDatabaseId`<sup>Required</sup> <a name="ProtectedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.protectedDatabaseId"></a>

```csharp
public string ProtectedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database#protected_database_id DataOciRecoveryProtectedDatabase#protected_database_id}.

---

### DataOciRecoveryProtectedDatabaseMetrics <a name="DataOciRecoveryProtectedDatabaseMetrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRecoveryProtectedDatabaseMetrics {

};
```


### DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets <a name="DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRecoveryProtectedDatabaseMetricsList <a name="DataOciRecoveryProtectedDatabaseMetricsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRecoveryProtectedDatabaseMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.get"></a>

```csharp
private DataOciRecoveryProtectedDatabaseMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciRecoveryProtectedDatabaseMetricsOutputReference <a name="DataOciRecoveryProtectedDatabaseMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRecoveryProtectedDatabaseMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceEstimateInGbs">BackupSpaceEstimateInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceUsedInGbs">BackupSpaceUsedInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.currentRetentionPeriodInSeconds">CurrentRetentionPeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.dbSizeInGbs">DbSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.isRedoLogsEnabled">IsRedoLogsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.minimumRecoveryNeededInDays">MinimumRecoveryNeededInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.unprotectedWindowInSeconds">UnprotectedWindowInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetrics">DataOciRecoveryProtectedDatabaseMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupSpaceEstimateInGbs`<sup>Required</sup> <a name="BackupSpaceEstimateInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceEstimateInGbs"></a>

```csharp
public double BackupSpaceEstimateInGbs { get; }
```

- *Type:* double

---

##### `BackupSpaceUsedInGbs`<sup>Required</sup> <a name="BackupSpaceUsedInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceUsedInGbs"></a>

```csharp
public double BackupSpaceUsedInGbs { get; }
```

- *Type:* double

---

##### `CurrentRetentionPeriodInSeconds`<sup>Required</sup> <a name="CurrentRetentionPeriodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.currentRetentionPeriodInSeconds"></a>

```csharp
public double CurrentRetentionPeriodInSeconds { get; }
```

- *Type:* double

---

##### `DbSizeInGbs`<sup>Required</sup> <a name="DbSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.dbSizeInGbs"></a>

```csharp
public double DbSizeInGbs { get; }
```

- *Type:* double

---

##### `IsRedoLogsEnabled`<sup>Required</sup> <a name="IsRedoLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.isRedoLogsEnabled"></a>

```csharp
public IResolvable IsRedoLogsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MinimumRecoveryNeededInDays`<sup>Required</sup> <a name="MinimumRecoveryNeededInDays" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.minimumRecoveryNeededInDays"></a>

```csharp
public double MinimumRecoveryNeededInDays { get; }
```

- *Type:* double

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `UnprotectedWindowInSeconds`<sup>Required</sup> <a name="UnprotectedWindowInSeconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.unprotectedWindowInSeconds"></a>

```csharp
public double UnprotectedWindowInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.internalValue"></a>

```csharp
public DataOciRecoveryProtectedDatabaseMetrics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetrics">DataOciRecoveryProtectedDatabaseMetrics</a>

---


### DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList <a name="DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.get"></a>

```csharp
private DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference <a name="DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId">RecoveryServiceSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets">DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecoveryServiceSubnetId`<sup>Required</sup> <a name="RecoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId"></a>

```csharp
public string RecoveryServiceSubnetId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.internalValue"></a>

```csharp
public DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets">DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets</a>

---



