# `dataOciCoreVirtualCircuitAssociatedTunnels` Submodule <a name="`dataOciCoreVirtualCircuitAssociatedTunnels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuitAssociatedTunnels <a name="DataOciCoreVirtualCircuitAssociatedTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels oci_core_virtual_circuit_associated_tunnels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitAssociatedTunnels(Construct Scope, string Id, DataOciCoreVirtualCircuitAssociatedTunnelsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig">DataOciCoreVirtualCircuitAssociatedTunnelsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig">DataOciCoreVirtualCircuitAssociatedTunnelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuitAssociatedTunnels resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuitAssociatedTunnels.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuitAssociatedTunnels.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuitAssociatedTunnels.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuitAssociatedTunnels.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuitAssociatedTunnels resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVirtualCircuitAssociatedTunnels to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVirtualCircuitAssociatedTunnels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuitAssociatedTunnels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList">DataOciCoreVirtualCircuitAssociatedTunnelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitAssociatedTunnelDetails">VirtualCircuitAssociatedTunnelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitIdInput">VirtualCircuitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitId">VirtualCircuitId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filter"></a>

```csharp
public DataOciCoreVirtualCircuitAssociatedTunnelsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList">DataOciCoreVirtualCircuitAssociatedTunnelsFilterList</a>

---

##### `VirtualCircuitAssociatedTunnelDetails`<sup>Required</sup> <a name="VirtualCircuitAssociatedTunnelDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitAssociatedTunnelDetails"></a>

```csharp
public DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList VirtualCircuitAssociatedTunnelDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VirtualCircuitIdInput`<sup>Optional</sup> <a name="VirtualCircuitIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitIdInput"></a>

```csharp
public string VirtualCircuitIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VirtualCircuitId`<sup>Required</sup> <a name="VirtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitId"></a>

```csharp
public string VirtualCircuitId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitAssociatedTunnelsConfig <a name="DataOciCoreVirtualCircuitAssociatedTunnelsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitAssociatedTunnelsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VirtualCircuitId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.virtualCircuitId">VirtualCircuitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#virtual_circuit_id DataOciCoreVirtualCircuitAssociatedTunnels#virtual_circuit_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#id DataOciCoreVirtualCircuitAssociatedTunnels#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VirtualCircuitId`<sup>Required</sup> <a name="VirtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.virtualCircuitId"></a>

```csharp
public string VirtualCircuitId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#virtual_circuit_id DataOciCoreVirtualCircuitAssociatedTunnels#virtual_circuit_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#filter DataOciCoreVirtualCircuitAssociatedTunnels#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#id DataOciCoreVirtualCircuitAssociatedTunnels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVirtualCircuitAssociatedTunnelsFilter <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitAssociatedTunnelsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#name DataOciCoreVirtualCircuitAssociatedTunnels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#values DataOciCoreVirtualCircuitAssociatedTunnels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#regex DataOciCoreVirtualCircuitAssociatedTunnels#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#name DataOciCoreVirtualCircuitAssociatedTunnels#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#values DataOciCoreVirtualCircuitAssociatedTunnels#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#regex DataOciCoreVirtualCircuitAssociatedTunnels#regex}.

---

### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitAssociatedTunnelsFilterList <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitAssociatedTunnelsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get"></a>

```csharp
private DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get"></a>

```csharp
private DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.ipsecConnectionId">IpsecConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelType">TunnelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpsecConnectionId`<sup>Required</sup> <a name="IpsecConnectionId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.ipsecConnectionId"></a>

```csharp
public string IpsecConnectionId { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `TunnelType`<sup>Required</sup> <a name="TunnelType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelType"></a>

```csharp
public string TunnelType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails</a>

---



