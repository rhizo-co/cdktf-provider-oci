# `dataOciDatabaseManagementExternalClusterInstances` Submodule <a name="`dataOciDatabaseManagementExternalClusterInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalClusterInstances <a name="DataOciDatabaseManagementExternalClusterInstances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances oci_database_management_external_cluster_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstances(Construct Scope, string Id, DataOciDatabaseManagementExternalClusterInstancesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig">DataOciDatabaseManagementExternalClusterInstancesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig">DataOciDatabaseManagementExternalClusterInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetExternalClusterId">ResetExternalClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExternalClusterId` <a name="ResetExternalClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetExternalClusterId"></a>

```csharp
private void ResetExternalClusterId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalClusterInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalClusterInstances.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalClusterInstances.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalClusterInstances.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalClusterInstances.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalClusterInstances resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalClusterInstances to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalClusterInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalClusterInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.externalClusterInstanceCollection">ExternalClusterInstanceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList">DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList">DataOciDatabaseManagementExternalClusterInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.externalClusterIdInput">ExternalClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.externalClusterId">ExternalClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExternalClusterInstanceCollection`<sup>Required</sup> <a name="ExternalClusterInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.externalClusterInstanceCollection"></a>

```csharp
public DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList ExternalClusterInstanceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList">DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.filter"></a>

```csharp
public DataOciDatabaseManagementExternalClusterInstancesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList">DataOciDatabaseManagementExternalClusterInstancesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExternalClusterIdInput`<sup>Optional</sup> <a name="ExternalClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.externalClusterIdInput"></a>

```csharp
public string ExternalClusterIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalClusterId`<sup>Required</sup> <a name="ExternalClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.externalClusterId"></a>

```csharp
public string ExternalClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstances.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalClusterInstancesConfig <a name="DataOciDatabaseManagementExternalClusterInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstancesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string DisplayName = null,
    string ExternalClusterId = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#compartment_id DataOciDatabaseManagementExternalClusterInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#display_name DataOciDatabaseManagementExternalClusterInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.externalClusterId">ExternalClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#external_cluster_id DataOciDatabaseManagementExternalClusterInstances#external_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#id DataOciDatabaseManagementExternalClusterInstances#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#compartment_id DataOciDatabaseManagementExternalClusterInstances#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#display_name DataOciDatabaseManagementExternalClusterInstances#display_name}.

---

##### `ExternalClusterId`<sup>Optional</sup> <a name="ExternalClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.externalClusterId"></a>

```csharp
public string ExternalClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#external_cluster_id DataOciDatabaseManagementExternalClusterInstances#external_cluster_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#filter DataOciDatabaseManagementExternalClusterInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#id DataOciDatabaseManagementExternalClusterInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollection <a name="DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollection {

};
```


### DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItems <a name="DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItems {

};
```


### DataOciDatabaseManagementExternalClusterInstancesFilter <a name="DataOciDatabaseManagementExternalClusterInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstancesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#name DataOciDatabaseManagementExternalClusterInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#values DataOciDatabaseManagementExternalClusterInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#regex DataOciDatabaseManagementExternalClusterInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#name DataOciDatabaseManagementExternalClusterInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#values DataOciDatabaseManagementExternalClusterInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_cluster_instances#regex DataOciDatabaseManagementExternalClusterInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList <a name="DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.adrHomeDirectory">AdrHomeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.componentName">ComponentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.crsBaseDirectory">CrsBaseDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.externalClusterId">ExternalClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.externalClusterInstanceId">ExternalClusterInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.externalConnectorId">ExternalConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.externalDbNodeId">ExternalDbNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.nodeRole">NodeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItems">DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdrHomeDirectory`<sup>Required</sup> <a name="AdrHomeDirectory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.adrHomeDirectory"></a>

```csharp
public string AdrHomeDirectory { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComponentName`<sup>Required</sup> <a name="ComponentName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.componentName"></a>

```csharp
public string ComponentName { get; }
```

- *Type:* string

---

##### `CrsBaseDirectory`<sup>Required</sup> <a name="CrsBaseDirectory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.crsBaseDirectory"></a>

```csharp
public string CrsBaseDirectory { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalClusterId`<sup>Required</sup> <a name="ExternalClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.externalClusterId"></a>

```csharp
public string ExternalClusterId { get; }
```

- *Type:* string

---

##### `ExternalClusterInstanceId`<sup>Required</sup> <a name="ExternalClusterInstanceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.externalClusterInstanceId"></a>

```csharp
public string ExternalClusterInstanceId { get; }
```

- *Type:* string

---

##### `ExternalConnectorId`<sup>Required</sup> <a name="ExternalConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.externalConnectorId"></a>

```csharp
public string ExternalConnectorId { get; }
```

- *Type:* string

---

##### `ExternalDbNodeId`<sup>Required</sup> <a name="ExternalDbNodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.externalDbNodeId"></a>

```csharp
public string ExternalDbNodeId { get; }
```

- *Type:* string

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.externalDbSystemId"></a>

```csharp
public string ExternalDbSystemId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NodeRole`<sup>Required</sup> <a name="NodeRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.nodeRole"></a>

```csharp
public string NodeRole { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItems">DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItems</a>

---


### DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList <a name="DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference <a name="DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList">DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollection">DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList">DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollection">DataOciDatabaseManagementExternalClusterInstancesExternalClusterInstanceCollection</a>

---


### DataOciDatabaseManagementExternalClusterInstancesFilterList <a name="DataOciDatabaseManagementExternalClusterInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstancesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.get"></a>

```csharp
private DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference <a name="DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalClusterInstances.DataOciDatabaseManagementExternalClusterInstancesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



