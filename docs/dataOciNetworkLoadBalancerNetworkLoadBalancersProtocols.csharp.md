# `dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols` Submodule <a name="`dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols oci_network_load_balancer_network_load_balancers_protocols}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols(Construct Scope, string Id, DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.networkLoadBalancersProtocolCollection">NetworkLoadBalancersProtocolCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.filter"></a>

```csharp
public DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList</a>

---

##### `NetworkLoadBalancersProtocolCollection`<sup>Required</sup> <a name="NetworkLoadBalancersProtocolCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.networkLoadBalancersProtocolCollection"></a>

```csharp
public DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList NetworkLoadBalancersProtocolCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#id DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#filter DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#id DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#name DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#values DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#regex DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#name DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#values DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#regex DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#regex}.

---

### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.get"></a>

```csharp
private DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.get"></a>

```csharp
private DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection</a>

---



