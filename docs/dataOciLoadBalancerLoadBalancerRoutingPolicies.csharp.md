# `dataOciLoadBalancerLoadBalancerRoutingPolicies` Submodule <a name="`dataOciLoadBalancerLoadBalancerRoutingPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicies <a name="DataOciLoadBalancerLoadBalancerRoutingPolicies" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies oci_load_balancer_load_balancer_routing_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPolicies(Construct Scope, string Id, DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig">DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig">DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancerRoutingPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerLoadBalancerRoutingPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerLoadBalancerRoutingPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerLoadBalancerRoutingPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerLoadBalancerRoutingPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancerRoutingPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoadBalancerLoadBalancerRoutingPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoadBalancerLoadBalancerRoutingPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerLoadBalancerRoutingPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.routingPolicies">RoutingPolicies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.filter"></a>

```csharp
public DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList</a>

---

##### `RoutingPolicies`<sup>Required</sup> <a name="RoutingPolicies" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.routingPolicies"></a>

```csharp
public DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList RoutingPolicies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LoadBalancerId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicies#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#id DataOciLoadBalancerLoadBalancerRoutingPolicies#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicies#load_balancer_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#filter DataOciLoadBalancerLoadBalancerRoutingPolicies#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#id DataOciLoadBalancerLoadBalancerRoutingPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#name DataOciLoadBalancerLoadBalancerRoutingPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#values DataOciLoadBalancerLoadBalancerRoutingPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#regex DataOciLoadBalancerLoadBalancerRoutingPolicies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#name DataOciLoadBalancerLoadBalancerRoutingPolicies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#values DataOciLoadBalancerLoadBalancerRoutingPolicies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#regex DataOciLoadBalancerLoadBalancerRoutingPolicies#regex}.

---

### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies {

};
```


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules {

};
```


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.get"></a>

```csharp
private DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.get"></a>

```csharp
private DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionLanguageVersion`<sup>Required</sup> <a name="ConditionLanguageVersion" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.conditionLanguageVersion"></a>

```csharp
public string ConditionLanguageVersion { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.rules"></a>

```csharp
public DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies</a>

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.get"></a>

```csharp
private DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.backendSetName">BackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.backendSetName"></a>

```csharp
public string BackendSetName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions</a>

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.get"></a>

```csharp
private DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.actions">Actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.actions"></a>

```csharp
public DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList Actions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules</a>

---



