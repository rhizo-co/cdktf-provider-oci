# `dataOciDatabaseAutonomousContainerDatabaseResourceUsage` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabaseResourceUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabaseResourceUsage <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage oci_database_autonomous_container_database_resource_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseResourceUsage(Construct Scope, string Id, DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig">DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig">DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseResourceUsage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousContainerDatabaseResourceUsage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousContainerDatabaseResourceUsage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousContainerDatabaseResourceUsage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousContainerDatabaseResourceUsage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseResourceUsage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabaseResourceUsage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousContainerDatabaseResourceUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabaseResourceUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseVmUsage">AutonomousContainerDatabaseVmUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.availableCpus">AvailableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.largestProvisionableAutonomousDatabaseInCpus">LargestProvisionableAutonomousDatabaseInCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionableCpus">ProvisionableCpus</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.usedCpus">UsedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseIdInput">AutonomousContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousContainerDatabaseVmUsage`<sup>Required</sup> <a name="AutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseVmUsage"></a>

```csharp
public DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList AutonomousContainerDatabaseVmUsage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList</a>

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.availableCpus"></a>

```csharp
public double AvailableCpus { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `LargestProvisionableAutonomousDatabaseInCpus`<sup>Required</sup> <a name="LargestProvisionableAutonomousDatabaseInCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```csharp
public double LargestProvisionableAutonomousDatabaseInCpus { get; }
```

- *Type:* double

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionableCpus"></a>

```csharp
public double[] ProvisionableCpus { get; }
```

- *Type:* double[]

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.usedCpus"></a>

```csharp
public double UsedCpus { get; }
```

- *Type:* double

---

##### `AutonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseIdInput"></a>

```csharp
public string AutonomousContainerDatabaseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage {

};
```


### DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousContainerDatabaseId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#autonomous_container_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.get"></a>

```csharp
private DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus">UsedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus"></a>

```csharp
public double UsedCpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage</a>

---



