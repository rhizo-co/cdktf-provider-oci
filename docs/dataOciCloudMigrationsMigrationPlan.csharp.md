# `dataOciCloudMigrationsMigrationPlan` Submodule <a name="`dataOciCloudMigrationsMigrationPlan` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlan <a name="DataOciCloudMigrationsMigrationPlan" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan oci_cloud_migrations_migration_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlan(Construct Scope, string Id, DataOciCloudMigrationsMigrationPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig">DataOciCloudMigrationsMigrationPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig">DataOciCloudMigrationsMigrationPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlan.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudMigrationsMigrationPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.calculatedLimits">CalculatedLimits</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationId">MigrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanStats">MigrationPlanStats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.referenceToRmsStack">ReferenceToRmsStack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.sourceMigrationPlanId">SourceMigrationPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.strategies">Strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList">DataOciCloudMigrationsMigrationPlanStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.targetEnvironments">TargetEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanIdInput">MigrationPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanId">MigrationPlanId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CalculatedLimits`<sup>Required</sup> <a name="CalculatedLimits" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.calculatedLimits"></a>

```csharp
public StringMap CalculatedLimits { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationId"></a>

```csharp
public string MigrationId { get; }
```

- *Type:* string

---

##### `MigrationPlanStats`<sup>Required</sup> <a name="MigrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanStats"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList MigrationPlanStats { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList</a>

---

##### `ReferenceToRmsStack`<sup>Required</sup> <a name="ReferenceToRmsStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.referenceToRmsStack"></a>

```csharp
public string ReferenceToRmsStack { get; }
```

- *Type:* string

---

##### `SourceMigrationPlanId`<sup>Required</sup> <a name="SourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.sourceMigrationPlanId"></a>

```csharp
public string SourceMigrationPlanId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Strategies`<sup>Required</sup> <a name="Strategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.strategies"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanStrategiesList Strategies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList">DataOciCloudMigrationsMigrationPlanStrategiesList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetEnvironments`<sup>Required</sup> <a name="TargetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.targetEnvironments"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList TargetEnvironments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `MigrationPlanIdInput`<sup>Optional</sup> <a name="MigrationPlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanIdInput"></a>

```csharp
public string MigrationPlanIdInput { get; }
```

- *Type:* string

---

##### `MigrationPlanId`<sup>Required</sup> <a name="MigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanId"></a>

```csharp
public string MigrationPlanId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlanConfig <a name="DataOciCloudMigrationsMigrationPlanConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MigrationPlanId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.migrationPlanId">MigrationPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan#migration_plan_id DataOciCloudMigrationsMigrationPlan#migration_plan_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MigrationPlanId`<sup>Required</sup> <a name="MigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.migrationPlanId"></a>

```csharp
public string MigrationPlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan#migration_plan_id DataOciCloudMigrationsMigrationPlan#migration_plan_id}.

---

### DataOciCloudMigrationsMigrationPlanMigrationPlanStats <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStats {

};
```


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost {

};
```


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute {

};
```


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage {

};
```


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage {

};
```


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes {

};
```


### DataOciCloudMigrationsMigrationPlanStrategies <a name="DataOciCloudMigrationsMigrationPlanStrategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanStrategies {

};
```


### DataOciCloudMigrationsMigrationPlanTargetEnvironments <a name="DataOciCloudMigrationsMigrationPlanTargetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanTargetEnvironments {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.totalEstimatedCost">TotalEstimatedCost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.vmCount">VmCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStats">DataOciCloudMigrationsMigrationPlanMigrationPlanStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalEstimatedCost`<sup>Required</sup> <a name="TotalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.totalEstimatedCost"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList TotalEstimatedCost { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList</a>

---

##### `VmCount`<sup>Required</sup> <a name="VmCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.vmCount"></a>

```csharp
public double VmCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStats InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStats">DataOciCloudMigrationsMigrationPlanMigrationPlanStats</a>

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount">GpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour">GpuPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription">GpuPerHourBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb">MemoryAmountGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour">MemoryGbPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription">MemoryGbPerHourBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour">OcpuPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription">OcpuPerHourBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour">TotalPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription">TotalPerHourBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GpuCount`<sup>Required</sup> <a name="GpuCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount"></a>

```csharp
public double GpuCount { get; }
```

- *Type:* double

---

##### `GpuPerHour`<sup>Required</sup> <a name="GpuPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour"></a>

```csharp
public double GpuPerHour { get; }
```

- *Type:* double

---

##### `GpuPerHourBySubscription`<sup>Required</sup> <a name="GpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription"></a>

```csharp
public double GpuPerHourBySubscription { get; }
```

- *Type:* double

---

##### `MemoryAmountGb`<sup>Required</sup> <a name="MemoryAmountGb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb"></a>

```csharp
public double MemoryAmountGb { get; }
```

- *Type:* double

---

##### `MemoryGbPerHour`<sup>Required</sup> <a name="MemoryGbPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour"></a>

```csharp
public double MemoryGbPerHour { get; }
```

- *Type:* double

---

##### `MemoryGbPerHourBySubscription`<sup>Required</sup> <a name="MemoryGbPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription"></a>

```csharp
public double MemoryGbPerHourBySubscription { get; }
```

- *Type:* double

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; }
```

- *Type:* double

---

##### `OcpuPerHour`<sup>Required</sup> <a name="OcpuPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour"></a>

```csharp
public double OcpuPerHour { get; }
```

- *Type:* double

---

##### `OcpuPerHourBySubscription`<sup>Required</sup> <a name="OcpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription"></a>

```csharp
public double OcpuPerHourBySubscription { get; }
```

- *Type:* double

---

##### `TotalPerHour`<sup>Required</sup> <a name="TotalPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour"></a>

```csharp
public double TotalPerHour { get; }
```

- *Type:* double

---

##### `TotalPerHourBySubscription`<sup>Required</sup> <a name="TotalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription"></a>

```csharp
public double TotalPerHourBySubscription { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute</a>

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour">TotalPerHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription">TotalPerHourBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalPerHour`<sup>Required</sup> <a name="TotalPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour"></a>

```csharp
public double TotalPerHour { get; }
```

- *Type:* double

---

##### `TotalPerHourBySubscription`<sup>Required</sup> <a name="TotalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription"></a>

```csharp
public double TotalPerHourBySubscription { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage</a>

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute">Compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage">OsImage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage">Storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth">TotalEstimationPerMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription">TotalEstimationPerMonthBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList Compute { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList</a>

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `OsImage`<sup>Required</sup> <a name="OsImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList OsImage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList Storage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList</a>

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TotalEstimationPerMonth`<sup>Required</sup> <a name="TotalEstimationPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth"></a>

```csharp
public double TotalEstimationPerMonth { get; }
```

- *Type:* double

---

##### `TotalEstimationPerMonthBySubscription`<sup>Required</sup> <a name="TotalEstimationPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription"></a>

```csharp
public double TotalEstimationPerMonthBySubscription { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost</a>

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth">TotalGbPerMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription">TotalGbPerMonthBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes">Volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalGbPerMonth`<sup>Required</sup> <a name="TotalGbPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth"></a>

```csharp
public double TotalGbPerMonth { get; }
```

- *Type:* double

---

##### `TotalGbPerMonthBySubscription`<sup>Required</sup> <a name="TotalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription"></a>

```csharp
public double TotalGbPerMonthBySubscription { get; }
```

- *Type:* double

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList Volumes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage</a>

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb">CapacityGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth">TotalGbPerMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription">TotalGbPerMonthBySubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb"></a>

```csharp
public double CapacityGb { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `TotalGbPerMonth`<sup>Required</sup> <a name="TotalGbPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth"></a>

```csharp
public double TotalGbPerMonth { get; }
```

- *Type:* double

---

##### `TotalGbPerMonthBySubscription`<sup>Required</sup> <a name="TotalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription"></a>

```csharp
public double TotalGbPerMonthBySubscription { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes</a>

---


### DataOciCloudMigrationsMigrationPlanStrategiesList <a name="DataOciCloudMigrationsMigrationPlanStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanStrategiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanStrategiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanStrategiesOutputReference <a name="DataOciCloudMigrationsMigrationPlanStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanStrategiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplier">AdjustmentMultiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindow">MetricTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.percentile">Percentile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyType">StrategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategies">DataOciCloudMigrationsMigrationPlanStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdjustmentMultiplier`<sup>Required</sup> <a name="AdjustmentMultiplier" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplier"></a>

```csharp
public double AdjustmentMultiplier { get; }
```

- *Type:* double

---

##### `MetricTimeWindow`<sup>Required</sup> <a name="MetricTimeWindow" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindow"></a>

```csharp
public string MetricTimeWindow { get; }
```

- *Type:* string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `Percentile`<sup>Required</sup> <a name="Percentile" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.percentile"></a>

```csharp
public string Percentile { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyType"></a>

```csharp
public string StrategyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanStrategies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategies">DataOciCloudMigrationsMigrationPlanStrategies</a>

---


### DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList <a name="DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference <a name="DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHost">DedicatedVmHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicense">MsLicense</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeType">PreferredShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentId">TargetCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentType">TargetEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcn">Vcn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironments">DataOciCloudMigrationsMigrationPlanTargetEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `DedicatedVmHost`<sup>Required</sup> <a name="DedicatedVmHost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHost"></a>

```csharp
public string DedicatedVmHost { get; }
```

- *Type:* string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `MsLicense`<sup>Required</sup> <a name="MsLicense" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicense"></a>

```csharp
public string MsLicense { get; }
```

- *Type:* string

---

##### `PreferredShapeType`<sup>Required</sup> <a name="PreferredShapeType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeType"></a>

```csharp
public string PreferredShapeType { get; }
```

- *Type:* string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `TargetCompartmentId`<sup>Required</sup> <a name="TargetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentId"></a>

```csharp
public string TargetCompartmentId { get; }
```

- *Type:* string

---

##### `TargetEnvironmentType`<sup>Required</sup> <a name="TargetEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentType"></a>

```csharp
public string TargetEnvironmentType { get; }
```

- *Type:* string

---

##### `Vcn`<sup>Required</sup> <a name="Vcn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcn"></a>

```csharp
public string Vcn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanTargetEnvironments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironments">DataOciCloudMigrationsMigrationPlanTargetEnvironments</a>

---



