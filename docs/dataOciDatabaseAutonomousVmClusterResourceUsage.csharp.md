# `dataOciDatabaseAutonomousVmClusterResourceUsage` Submodule <a name="`dataOciDatabaseAutonomousVmClusterResourceUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousVmClusterResourceUsage <a name="DataOciDatabaseAutonomousVmClusterResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage oci_database_autonomous_vm_cluster_resource_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterResourceUsage(Construct Scope, string Id, DataOciDatabaseAutonomousVmClusterResourceUsageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig">DataOciDatabaseAutonomousVmClusterResourceUsageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig">DataOciDatabaseAutonomousVmClusterResourceUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousVmClusterResourceUsage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmClusterResourceUsage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmClusterResourceUsage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmClusterResourceUsage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmClusterResourceUsage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousVmClusterResourceUsage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousVmClusterResourceUsage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousVmClusterResourceUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousVmClusterResourceUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousDataStorageSizeInTbs">AutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmResourceUsage">AutonomousVmResourceUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.availableAutonomousDataStorageSizeInTbs">AvailableAutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.availableCpus">AvailableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.exadataStorageInTbs">ExadataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.nonProvisionableAutonomousContainerDatabases">NonProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionableAutonomousContainerDatabases">ProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionedAutonomousContainerDatabases">ProvisionedAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.totalContainerDatabases">TotalContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.totalCpus">TotalCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.usedAutonomousDataStorageSizeInTbs">UsedAutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.usedCpus">UsedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmClusterIdInput">AutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousDataStorageSizeInTbs"></a>

```csharp
public double AutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AutonomousVmResourceUsage`<sup>Required</sup> <a name="AutonomousVmResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmResourceUsage"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList AutonomousVmResourceUsage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList</a>

---

##### `AvailableAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AvailableAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.availableAutonomousDataStorageSizeInTbs"></a>

```csharp
public double AvailableAutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.availableCpus"></a>

```csharp
public double AvailableCpus { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExadataStorageInTbs`<sup>Required</sup> <a name="ExadataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.exadataStorageInTbs"></a>

```csharp
public double ExadataStorageInTbs { get; }
```

- *Type:* double

---

##### `IsLocalBackupEnabled`<sup>Required</sup> <a name="IsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.isLocalBackupEnabled"></a>

```csharp
public IResolvable IsLocalBackupEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.memoryPerOracleComputeUnitInGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitInGbs { get; }
```

- *Type:* double

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `NonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="NonProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.nonProvisionableAutonomousContainerDatabases"></a>

```csharp
public double NonProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionableAutonomousContainerDatabases"></a>

```csharp
public double ProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionedAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionedAutonomousContainerDatabases"></a>

```csharp
public double ProvisionedAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `TotalContainerDatabases`<sup>Required</sup> <a name="TotalContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.totalContainerDatabases"></a>

```csharp
public double TotalContainerDatabases { get; }
```

- *Type:* double

---

##### `TotalCpus`<sup>Required</sup> <a name="TotalCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.totalCpus"></a>

```csharp
public double TotalCpus { get; }
```

- *Type:* double

---

##### `UsedAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="UsedAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.usedAutonomousDataStorageSizeInTbs"></a>

```csharp
public double UsedAutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.usedCpus"></a>

```csharp
public double UsedCpus { get; }
```

- *Type:* double

---

##### `AutonomousVmClusterIdInput`<sup>Optional</sup> <a name="AutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmClusterIdInput"></a>

```csharp
public string AutonomousVmClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmClusterId"></a>

```csharp
public string AutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage {

};
```


### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage {

};
```


### DataOciDatabaseAutonomousVmClusterResourceUsageConfig <a name="DataOciDatabaseAutonomousVmClusterResourceUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterResourceUsageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousVmClusterId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage#autonomous_vm_cluster_id DataOciDatabaseAutonomousVmClusterResourceUsage#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage#id DataOciDatabaseAutonomousVmClusterResourceUsage#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.autonomousVmClusterId"></a>

```csharp
public string AutonomousVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage#autonomous_vm_cluster_id DataOciDatabaseAutonomousVmClusterResourceUsage#autonomous_vm_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage#id DataOciDatabaseAutonomousVmClusterResourceUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.availableCpus">AvailableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.usedCpus">UsedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.availableCpus"></a>

```csharp
public double AvailableCpus { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.usedCpus"></a>

```csharp
public double UsedCpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage</a>

---


### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.autonomousContainerDatabaseUsage">AutonomousContainerDatabaseUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.availableCpus">AvailableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.usedCpus">UsedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutonomousContainerDatabaseUsage`<sup>Required</sup> <a name="AutonomousContainerDatabaseUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.autonomousContainerDatabaseUsage"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList AutonomousContainerDatabaseUsage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList</a>

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.availableCpus"></a>

```csharp
public double AvailableCpus { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.usedCpus"></a>

```csharp
public double UsedCpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage</a>

---



