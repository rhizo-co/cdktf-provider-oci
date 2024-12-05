# `dataOciDatabasePluggableDatabase` Submodule <a name="`dataOciDatabasePluggableDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabasePluggableDatabase <a name="DataOciDatabasePluggableDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database oci_database_pluggable_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabase(Construct Scope, string Id, DataOciDatabasePluggableDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig">DataOciDatabasePluggableDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig">DataOciDatabasePluggableDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabasePluggableDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabasePluggableDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabasePluggableDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabasePluggableDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabasePluggableDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabasePluggableDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabasePluggableDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabasePluggableDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabasePluggableDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList">DataOciDatabasePluggableDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseAdminPassword">ContainerDatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.convertToRegularTrigger">ConvertToRegularTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.isRestricted">IsRestricted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbAdminPassword">PdbAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbCreationTypeDetails">PdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbName">PdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbNodeLevelDetails">PdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseManagementConfig">PluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshableCloneConfig">RefreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList">DataOciDatabasePluggableDatabaseRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshTrigger">RefreshTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.rotateKeyTrigger">RotateKeyTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldCreatePdbBackup">ShouldCreatePdbBackup</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked">ShouldPdbAdminAccountBeLocked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseIdInput">PluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseId">PluggableDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.connectionStrings"></a>

```csharp
public DataOciDatabasePluggableDatabaseConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList">DataOciDatabasePluggableDatabaseConnectionStringsList</a>

---

##### `ContainerDatabaseAdminPassword`<sup>Required</sup> <a name="ContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseAdminPassword"></a>

```csharp
public string ContainerDatabaseAdminPassword { get; }
```

- *Type:* string

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseId"></a>

```csharp
public string ContainerDatabaseId { get; }
```

- *Type:* string

---

##### `ConvertToRegularTrigger`<sup>Required</sup> <a name="ConvertToRegularTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.convertToRegularTrigger"></a>

```csharp
public double ConvertToRegularTrigger { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsRestricted`<sup>Required</sup> <a name="IsRestricted" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.isRestricted"></a>

```csharp
public IResolvable IsRestricted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `PdbAdminPassword`<sup>Required</sup> <a name="PdbAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbAdminPassword"></a>

```csharp
public string PdbAdminPassword { get; }
```

- *Type:* string

---

##### `PdbCreationTypeDetails`<sup>Required</sup> <a name="PdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbCreationTypeDetails"></a>

```csharp
public DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList PdbCreationTypeDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList</a>

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbName"></a>

```csharp
public string PdbName { get; }
```

- *Type:* string

---

##### `PdbNodeLevelDetails`<sup>Required</sup> <a name="PdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbNodeLevelDetails"></a>

```csharp
public DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList PdbNodeLevelDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList</a>

---

##### `PluggableDatabaseManagementConfig`<sup>Required</sup> <a name="PluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseManagementConfig"></a>

```csharp
public DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList PluggableDatabaseManagementConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList</a>

---

##### `RefreshableCloneConfig`<sup>Required</sup> <a name="RefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshableCloneConfig"></a>

```csharp
public DataOciDatabasePluggableDatabaseRefreshableCloneConfigList RefreshableCloneConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList">DataOciDatabasePluggableDatabaseRefreshableCloneConfigList</a>

---

##### `RefreshTrigger`<sup>Required</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshTrigger"></a>

```csharp
public double RefreshTrigger { get; }
```

- *Type:* double

---

##### `RotateKeyTrigger`<sup>Required</sup> <a name="RotateKeyTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.rotateKeyTrigger"></a>

```csharp
public double RotateKeyTrigger { get; }
```

- *Type:* double

---

##### `ShouldCreatePdbBackup`<sup>Required</sup> <a name="ShouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldCreatePdbBackup"></a>

```csharp
public IResolvable ShouldCreatePdbBackup { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="ShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked"></a>

```csharp
public IResolvable ShouldPdbAdminAccountBeLocked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TdeWalletPassword`<sup>Required</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `PluggableDatabaseIdInput`<sup>Optional</sup> <a name="PluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseIdInput"></a>

```csharp
public string PluggableDatabaseIdInput { get; }
```

- *Type:* string

---

##### `PluggableDatabaseId`<sup>Required</sup> <a name="PluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseId"></a>

```csharp
public string PluggableDatabaseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabasePluggableDatabaseConfig <a name="DataOciDatabasePluggableDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PluggableDatabaseId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.pluggableDatabaseId">PluggableDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#pluggable_database_id DataOciDatabasePluggableDatabase#pluggable_database_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PluggableDatabaseId`<sup>Required</sup> <a name="PluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.pluggableDatabaseId"></a>

```csharp
public string PluggableDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#pluggable_database_id DataOciDatabasePluggableDatabase#pluggable_database_id}.

---

### DataOciDatabasePluggableDatabaseConnectionStrings <a name="DataOciDatabasePluggableDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabaseConnectionStrings {

};
```


### DataOciDatabasePluggableDatabasePdbCreationTypeDetails <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePdbCreationTypeDetails {

};
```


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails {

};
```


### DataOciDatabasePluggableDatabasePdbNodeLevelDetails <a name="DataOciDatabasePluggableDatabasePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePdbNodeLevelDetails {

};
```


### DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig <a name="DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig {

};
```


### DataOciDatabasePluggableDatabaseRefreshableCloneConfig <a name="DataOciDatabasePluggableDatabaseRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabaseRefreshableCloneConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabasePluggableDatabaseConnectionStringsList <a name="DataOciDatabasePluggableDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabaseConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.get"></a>

```csharp
private DataOciDatabasePluggableDatabaseConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabasePluggableDatabaseConnectionStringsOutputReference <a name="DataOciDatabasePluggableDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabaseConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault">PdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault">PdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings">DataOciDatabasePluggableDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public StringMap AllConnectionStrings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `PdbDefault`<sup>Required</sup> <a name="PdbDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault"></a>

```csharp
public string PdbDefault { get; }
```

- *Type:* string

---

##### `PdbIpDefault`<sup>Required</sup> <a name="PdbIpDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault"></a>

```csharp
public string PdbIpDefault { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabasePluggableDatabaseConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings">DataOciDatabasePluggableDatabaseConnectionStrings</a>

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.get"></a>

```csharp
private DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType">CreationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername">DblinkUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword">DblinkUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone">IsThinClone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails">RefreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword">SourceContainerDatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId">SourcePluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType"></a>

```csharp
public string CreationType { get; }
```

- *Type:* string

---

##### `DblinkUsername`<sup>Required</sup> <a name="DblinkUsername" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername"></a>

```csharp
public string DblinkUsername { get; }
```

- *Type:* string

---

##### `DblinkUserPassword`<sup>Required</sup> <a name="DblinkUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword"></a>

```csharp
public string DblinkUserPassword { get; }
```

- *Type:* string

---

##### `IsThinClone`<sup>Required</sup> <a name="IsThinClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone"></a>

```csharp
public IResolvable IsThinClone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RefreshableCloneDetails`<sup>Required</sup> <a name="RefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails"></a>

```csharp
public DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList RefreshableCloneDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList</a>

---

##### `SourceContainerDatabaseAdminPassword`<sup>Required</sup> <a name="SourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword"></a>

```csharp
public string SourceContainerDatabaseAdminPassword { get; }
```

- *Type:* string

---

##### `SourcePluggableDatabaseId`<sup>Required</sup> <a name="SourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId"></a>

```csharp
public string SourcePluggableDatabaseId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabasePluggableDatabasePdbCreationTypeDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetails</a>

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.get"></a>

```csharp
private DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone"></a>

```csharp
public IResolvable IsRefreshableClone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---


### DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList <a name="DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.get"></a>

```csharp
private DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference <a name="DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName">NodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails">DataOciDatabasePluggableDatabasePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```csharp
public string NodeName { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabasePluggableDatabasePdbNodeLevelDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails">DataOciDatabasePluggableDatabasePdbNodeLevelDetails</a>

---


### DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList <a name="DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.get"></a>

```csharp
private DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference <a name="DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus">ManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagementStatus`<sup>Required</sup> <a name="ManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```csharp
public string ManagementStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig</a>

---


### DataOciDatabasePluggableDatabaseRefreshableCloneConfigList <a name="DataOciDatabasePluggableDatabaseRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabaseRefreshableCloneConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.get"></a>

```csharp
private DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference <a name="DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig">DataOciDatabasePluggableDatabaseRefreshableCloneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```csharp
public IResolvable IsRefreshableClone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabasePluggableDatabaseRefreshableCloneConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig">DataOciDatabasePluggableDatabaseRefreshableCloneConfig</a>

---



