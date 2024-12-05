# `dataOciNetworkLoadBalancerBackendSetHealth` Submodule <a name="`dataOciNetworkLoadBalancerBackendSetHealth` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerBackendSetHealth <a name="DataOciNetworkLoadBalancerBackendSetHealth" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health oci_network_load_balancer_backend_set_health}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerBackendSetHealth(Construct Scope, string Id, DataOciNetworkLoadBalancerBackendSetHealthConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig">DataOciNetworkLoadBalancerBackendSetHealthConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig">DataOciNetworkLoadBalancerBackendSetHealthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSetHealth resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerBackendSetHealth.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerBackendSetHealth.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerBackendSetHealth.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerBackendSetHealth.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSetHealth resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciNetworkLoadBalancerBackendSetHealth to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciNetworkLoadBalancerBackendSetHealth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerBackendSetHealth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.criticalStateBackendNames">CriticalStateBackendNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.totalBackendCount">TotalBackendCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.unknownStateBackendNames">UnknownStateBackendNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.warningStateBackendNames">WarningStateBackendNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.backendSetNameInput">BackendSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.backendSetName">BackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CriticalStateBackendNames`<sup>Required</sup> <a name="CriticalStateBackendNames" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.criticalStateBackendNames"></a>

```csharp
public string[] CriticalStateBackendNames { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TotalBackendCount`<sup>Required</sup> <a name="TotalBackendCount" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.totalBackendCount"></a>

```csharp
public double TotalBackendCount { get; }
```

- *Type:* double

---

##### `UnknownStateBackendNames`<sup>Required</sup> <a name="UnknownStateBackendNames" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.unknownStateBackendNames"></a>

```csharp
public string[] UnknownStateBackendNames { get; }
```

- *Type:* string[]

---

##### `WarningStateBackendNames`<sup>Required</sup> <a name="WarningStateBackendNames" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.warningStateBackendNames"></a>

```csharp
public string[] WarningStateBackendNames { get; }
```

- *Type:* string[]

---

##### `BackendSetNameInput`<sup>Optional</sup> <a name="BackendSetNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.backendSetNameInput"></a>

```csharp
public string BackendSetNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.networkLoadBalancerIdInput"></a>

```csharp
public string NetworkLoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.backendSetName"></a>

```csharp
public string BackendSetName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealth.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerBackendSetHealthConfig <a name="DataOciNetworkLoadBalancerBackendSetHealthConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerBackendSetHealthConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackendSetName,
    string NetworkLoadBalancerId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.backendSetName">BackendSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health#backend_set_name DataOciNetworkLoadBalancerBackendSetHealth#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health#network_load_balancer_id DataOciNetworkLoadBalancerBackendSetHealth#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health#id DataOciNetworkLoadBalancerBackendSetHealth#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.backendSetName"></a>

```csharp
public string BackendSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health#backend_set_name DataOciNetworkLoadBalancerBackendSetHealth#backend_set_name}.

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health#network_load_balancer_id DataOciNetworkLoadBalancerBackendSetHealth#network_load_balancer_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSetHealth.DataOciNetworkLoadBalancerBackendSetHealthConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health#id DataOciNetworkLoadBalancerBackendSetHealth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


