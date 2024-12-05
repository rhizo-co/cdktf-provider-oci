# `dataOciCoreDedicatedVmHostInstanceShapes` Submodule <a name="`dataOciCoreDedicatedVmHostInstanceShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDedicatedVmHostInstanceShapes <a name="DataOciCoreDedicatedVmHostInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes oci_core_dedicated_vm_host_instance_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostInstanceShapes(Construct Scope, string Id, DataOciCoreDedicatedVmHostInstanceShapesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig">DataOciCoreDedicatedVmHostInstanceShapesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig">DataOciCoreDedicatedVmHostInstanceShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetDedicatedVmHostShape">ResetDedicatedVmHostShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetDedicatedVmHostShape` <a name="ResetDedicatedVmHostShape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetDedicatedVmHostShape"></a>

```csharp
private void ResetDedicatedVmHostShape()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDedicatedVmHostInstanceShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDedicatedVmHostInstanceShapes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDedicatedVmHostInstanceShapes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDedicatedVmHostInstanceShapes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDedicatedVmHostInstanceShapes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreDedicatedVmHostInstanceShapes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreDedicatedVmHostInstanceShapes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreDedicatedVmHostInstanceShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDedicatedVmHostInstanceShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostInstanceShapes">DedicatedVmHostInstanceShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList">DataOciCoreDedicatedVmHostInstanceShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShapeInput">DedicatedVmHostShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShape">DedicatedVmHostShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DedicatedVmHostInstanceShapes`<sup>Required</sup> <a name="DedicatedVmHostInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostInstanceShapes"></a>

```csharp
public DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList DedicatedVmHostInstanceShapes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filter"></a>

```csharp
public DataOciCoreDedicatedVmHostInstanceShapesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList">DataOciCoreDedicatedVmHostInstanceShapesFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DedicatedVmHostShapeInput`<sup>Optional</sup> <a name="DedicatedVmHostShapeInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShapeInput"></a>

```csharp
public string DedicatedVmHostShapeInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DedicatedVmHostShape`<sup>Required</sup> <a name="DedicatedVmHostShape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShape"></a>

```csharp
public string DedicatedVmHostShape { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDedicatedVmHostInstanceShapesConfig <a name="DataOciCoreDedicatedVmHostInstanceShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostInstanceShapesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AvailabilityDomain = null,
    string DedicatedVmHostShape = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#compartment_id DataOciCoreDedicatedVmHostInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#availability_domain DataOciCoreDedicatedVmHostInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dedicatedVmHostShape">DedicatedVmHostShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#dedicated_vm_host_shape DataOciCoreDedicatedVmHostInstanceShapes#dedicated_vm_host_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#id DataOciCoreDedicatedVmHostInstanceShapes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#compartment_id DataOciCoreDedicatedVmHostInstanceShapes#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#availability_domain DataOciCoreDedicatedVmHostInstanceShapes#availability_domain}.

---

##### `DedicatedVmHostShape`<sup>Optional</sup> <a name="DedicatedVmHostShape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dedicatedVmHostShape"></a>

```csharp
public string DedicatedVmHostShape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#dedicated_vm_host_shape DataOciCoreDedicatedVmHostInstanceShapes#dedicated_vm_host_shape}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#filter DataOciCoreDedicatedVmHostInstanceShapes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#id DataOciCoreDedicatedVmHostInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes <a name="DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes {

};
```


### DataOciCoreDedicatedVmHostInstanceShapesFilter <a name="DataOciCoreDedicatedVmHostInstanceShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostInstanceShapesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#name DataOciCoreDedicatedVmHostInstanceShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#values DataOciCoreDedicatedVmHostInstanceShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#regex DataOciCoreDedicatedVmHostInstanceShapes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#name DataOciCoreDedicatedVmHostInstanceShapes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#values DataOciCoreDedicatedVmHostInstanceShapes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#regex DataOciCoreDedicatedVmHostInstanceShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList <a name="DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.get"></a>

```csharp
private DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference <a name="DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.instanceShapeName">InstanceShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `InstanceShapeName`<sup>Required</sup> <a name="InstanceShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.instanceShapeName"></a>

```csharp
public string InstanceShapeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes</a>

---


### DataOciCoreDedicatedVmHostInstanceShapesFilterList <a name="DataOciCoreDedicatedVmHostInstanceShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostInstanceShapesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.get"></a>

```csharp
private DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference <a name="DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



