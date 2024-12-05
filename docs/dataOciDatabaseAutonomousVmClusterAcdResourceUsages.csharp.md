# `dataOciDatabaseAutonomousVmClusterAcdResourceUsages` Submodule <a name="`dataOciDatabaseAutonomousVmClusterAcdResourceUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousVmClusterAcdResourceUsages <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages oci_database_autonomous_vm_cluster_acd_resource_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsages(Construct Scope, string Id, DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousVmClusterAcdResourceUsages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmClusterAcdResourceUsages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmClusterAcdResourceUsages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmClusterAcdResourceUsages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousVmClusterAcdResourceUsages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousVmClusterAcdResourceUsages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousVmClusterAcdResourceUsages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousVmClusterAcdResourceUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousVmClusterAcdResourceUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousContainerDatabaseResourceUsages">AutonomousContainerDatabaseResourceUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousVmClusterIdInput">AutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousContainerDatabaseResourceUsages`<sup>Required</sup> <a name="AutonomousContainerDatabaseResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousContainerDatabaseResourceUsages"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList AutonomousContainerDatabaseResourceUsages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.filter"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList</a>

---

##### `AutonomousVmClusterIdInput`<sup>Optional</sup> <a name="AutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousVmClusterIdInput"></a>

```csharp
public string AutonomousVmClusterIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousVmClusterId"></a>

```csharp
public string AutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages {

};
```


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage {

};
```


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousVmClusterId,
    string CompartmentId = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#autonomous_vm_cluster_id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.autonomousVmClusterId"></a>

```csharp
public string AutonomousVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#autonomous_vm_cluster_id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#autonomous_vm_cluster_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#filter DataOciDatabaseAutonomousVmClusterAcdResourceUsages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#name DataOciDatabaseAutonomousVmClusterAcdResourceUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#values DataOciDatabaseAutonomousVmClusterAcdResourceUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#regex DataOciDatabaseAutonomousVmClusterAcdResourceUsages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#name DataOciDatabaseAutonomousVmClusterAcdResourceUsages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#values DataOciDatabaseAutonomousVmClusterAcdResourceUsages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#regex DataOciDatabaseAutonomousVmClusterAcdResourceUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus">UsedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus"></a>

```csharp
public double UsedCpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage</a>

---


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.autonomousContainerDatabaseVmUsage">AutonomousContainerDatabaseVmUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.availableCpus">AvailableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.largestProvisionableAutonomousDatabaseInCpus">LargestProvisionableAutonomousDatabaseInCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionableCpus">ProvisionableCpus</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.usedCpus">UsedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutonomousContainerDatabaseVmUsage`<sup>Required</sup> <a name="AutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.autonomousContainerDatabaseVmUsage"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList AutonomousContainerDatabaseVmUsage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList</a>

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.availableCpus"></a>

```csharp
public double AvailableCpus { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LargestProvisionableAutonomousDatabaseInCpus`<sup>Required</sup> <a name="LargestProvisionableAutonomousDatabaseInCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```csharp
public double LargestProvisionableAutonomousDatabaseInCpus { get; }
```

- *Type:* double

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionableCpus"></a>

```csharp
public double[] ProvisionableCpus { get; }
```

- *Type:* double[]

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.usedCpus"></a>

```csharp
public double UsedCpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages</a>

---


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.get"></a>

```csharp
private DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



