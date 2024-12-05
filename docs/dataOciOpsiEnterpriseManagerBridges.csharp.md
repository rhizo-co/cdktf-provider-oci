# `dataOciOpsiEnterpriseManagerBridges` Submodule <a name="`dataOciOpsiEnterpriseManagerBridges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiEnterpriseManagerBridges <a name="DataOciOpsiEnterpriseManagerBridges" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges oci_opsi_enterprise_manager_bridges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridges(Construct Scope, string Id, DataOciOpsiEnterpriseManagerBridgesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig">DataOciOpsiEnterpriseManagerBridgesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig">DataOciOpsiEnterpriseManagerBridgesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiEnterpriseManagerBridges resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiEnterpriseManagerBridges.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiEnterpriseManagerBridges.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiEnterpriseManagerBridges.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiEnterpriseManagerBridges.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOpsiEnterpriseManagerBridges resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiEnterpriseManagerBridges to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiEnterpriseManagerBridges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiEnterpriseManagerBridges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.enterpriseManagerBridgeCollection">EnterpriseManagerBridgeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList">DataOciOpsiEnterpriseManagerBridgesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.stateInput">StateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.state">State</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EnterpriseManagerBridgeCollection`<sup>Required</sup> <a name="EnterpriseManagerBridgeCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.enterpriseManagerBridgeCollection"></a>

```csharp
public DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList EnterpriseManagerBridgeCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filter"></a>

```csharp
public DataOciOpsiEnterpriseManagerBridgesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList">DataOciOpsiEnterpriseManagerBridgesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.stateInput"></a>

```csharp
public string[] StateInput { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.state"></a>

```csharp
public string[] State { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiEnterpriseManagerBridgesConfig <a name="DataOciOpsiEnterpriseManagerBridgesConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    object CompartmentIdInSubtree = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string[] State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id DataOciOpsiEnterpriseManagerBridges#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id_in_subtree DataOciOpsiEnterpriseManagerBridges#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#display_name DataOciOpsiEnterpriseManagerBridges#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#id DataOciOpsiEnterpriseManagerBridges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.state">State</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#state DataOciOpsiEnterpriseManagerBridges#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id DataOciOpsiEnterpriseManagerBridges#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id_in_subtree DataOciOpsiEnterpriseManagerBridges#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#display_name DataOciOpsiEnterpriseManagerBridges#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#filter DataOciOpsiEnterpriseManagerBridges#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#id DataOciOpsiEnterpriseManagerBridges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.state"></a>

```csharp
public string[] State { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#state DataOciOpsiEnterpriseManagerBridges#state}.

---

### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection {

};
```


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems {

};
```


### DataOciOpsiEnterpriseManagerBridgesFilter <a name="DataOciOpsiEnterpriseManagerBridgesFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#name DataOciOpsiEnterpriseManagerBridges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#values DataOciOpsiEnterpriseManagerBridges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#regex DataOciOpsiEnterpriseManagerBridges#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#name DataOciOpsiEnterpriseManagerBridges#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#values DataOciOpsiEnterpriseManagerBridges#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#regex DataOciOpsiEnterpriseManagerBridges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.get"></a>

```csharp
private DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketName">ObjectStorageBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketStatusDetails">ObjectStorageBucketStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageNamespaceName">ObjectStorageNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ObjectStorageBucketName`<sup>Required</sup> <a name="ObjectStorageBucketName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketName"></a>

```csharp
public string ObjectStorageBucketName { get; }
```

- *Type:* string

---

##### `ObjectStorageBucketStatusDetails`<sup>Required</sup> <a name="ObjectStorageBucketStatusDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketStatusDetails"></a>

```csharp
public string ObjectStorageBucketStatusDetails { get; }
```

- *Type:* string

---

##### `ObjectStorageNamespaceName`<sup>Required</sup> <a name="ObjectStorageNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageNamespaceName"></a>

```csharp
public string ObjectStorageNamespaceName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems</a>

---


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.get"></a>

```csharp
private DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.items"></a>

```csharp
public DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection</a>

---


### DataOciOpsiEnterpriseManagerBridgesFilterList <a name="DataOciOpsiEnterpriseManagerBridgesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.get"></a>

```csharp
private DataOciOpsiEnterpriseManagerBridgesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOpsiEnterpriseManagerBridgesFilterOutputReference <a name="DataOciOpsiEnterpriseManagerBridgesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



