# `dataOciNetworkLoadBalancerNetworkLoadBalancer` Submodule <a name="`dataOciNetworkLoadBalancerNetworkLoadBalancer` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancer <a name="DataOciNetworkLoadBalancerNetworkLoadBalancer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancer oci_network_load_balancer_network_load_balancer}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancer(Construct Scope, string Id, DataOciNetworkLoadBalancerNetworkLoadBalancerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig">DataOciNetworkLoadBalancerNetworkLoadBalancerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig">DataOciNetworkLoadBalancerNetworkLoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerNetworkLoadBalancer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerNetworkLoadBalancer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerNetworkLoadBalancer.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerNetworkLoadBalancer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciNetworkLoadBalancerNetworkLoadBalancer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciNetworkLoadBalancerNetworkLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerNetworkLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.assignedIpv6">AssignedIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.assignedPrivateIpv4">AssignedPrivateIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.ipAddresses">IpAddresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList">DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.isPreserveSourceDestination">IsPreserveSourceDestination</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.isPrivate">IsPrivate</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.isSymmetricHashEnabled">IsSymmetricHashEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.networkSecurityGroupIds">NetworkSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.nlbIpVersion">NlbIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.reservedIps">ReservedIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList">DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.securityAttributes">SecurityAttributes</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.subnetIpv6Cidr">SubnetIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AssignedIpv6`<sup>Required</sup> <a name="AssignedIpv6" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.assignedIpv6"></a>

```csharp
public string AssignedIpv6 { get; }
```

- *Type:* string

---

##### `AssignedPrivateIpv4`<sup>Required</sup> <a name="AssignedPrivateIpv4" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.assignedPrivateIpv4"></a>

```csharp
public string AssignedPrivateIpv4 { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.ipAddresses"></a>

```csharp
public DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList IpAddresses { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList">DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList</a>

---

##### `IsPreserveSourceDestination`<sup>Required</sup> <a name="IsPreserveSourceDestination" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.isPreserveSourceDestination"></a>

```csharp
public IResolvable IsPreserveSourceDestination { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.isPrivate"></a>

```csharp
public IResolvable IsPrivate { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSymmetricHashEnabled`<sup>Required</sup> <a name="IsSymmetricHashEnabled" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.isSymmetricHashEnabled"></a>

```csharp
public IResolvable IsSymmetricHashEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupIds`<sup>Required</sup> <a name="NetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.networkSecurityGroupIds"></a>

```csharp
public string[] NetworkSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `NlbIpVersion`<sup>Required</sup> <a name="NlbIpVersion" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.nlbIpVersion"></a>

```csharp
public string NlbIpVersion { get; }
```

- *Type:* string

---

##### `ReservedIps`<sup>Required</sup> <a name="ReservedIps" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.reservedIps"></a>

```csharp
public DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList ReservedIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList">DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList</a>

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.securityAttributes"></a>

```csharp
public StringMap SecurityAttributes { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SubnetIpv6Cidr`<sup>Required</sup> <a name="SubnetIpv6Cidr" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.subnetIpv6Cidr"></a>

```csharp
public string SubnetIpv6Cidr { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.networkLoadBalancerIdInput"></a>

```csharp
public string NetworkLoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancerConfig <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NetworkLoadBalancerId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancer#network_load_balancer_id DataOciNetworkLoadBalancerNetworkLoadBalancer#network_load_balancer_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerConfig.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancer#network_load_balancer_id DataOciNetworkLoadBalancerNetworkLoadBalancer#network_load_balancer_id}.

---

### DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddresses <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddresses" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddresses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddresses {

};
```


### DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp {

};
```


### DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIps <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIps" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIps {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.get"></a>

```csharp
private DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipVersion">IpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.isPublic">IsPublic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.reservedIp">ReservedIp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList">DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddresses">DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipVersion"></a>

```csharp
public string IpVersion { get; }
```

- *Type:* string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.isPublic"></a>

```csharp
public IResolvable IsPublic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReservedIp`<sup>Required</sup> <a name="ReservedIp" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.reservedIp"></a>

```csharp
public DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList ReservedIp { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList">DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddresses InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddresses">DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddresses</a>

---


### DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.get"></a>

```csharp
private DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp">DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp">DataOciNetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp</a>

---


### DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.get"></a>

```csharp
private DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIps">DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancer.DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIps">DataOciNetworkLoadBalancerNetworkLoadBalancerReservedIps</a>

---



