# `networkFirewallNetworkFirewallPolicyAddressList` Submodule <a name="`networkFirewallNetworkFirewallPolicyAddressList` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyAddressList <a name="NetworkFirewallNetworkFirewallPolicyAddressList" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list oci_network_firewall_network_firewall_policy_address_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyAddressList(Construct Scope, string Id, NetworkFirewallNetworkFirewallPolicyAddressListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig">NetworkFirewallNetworkFirewallPolicyAddressListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig">NetworkFirewallNetworkFirewallPolicyAddressListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkFirewallNetworkFirewallPolicyAddressListTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts">NetworkFirewallNetworkFirewallPolicyAddressListTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyAddressList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyAddressList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyAddressList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyAddressList.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyAddressList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyAddressList resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyAddressList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkFirewallNetworkFirewallPolicyAddressList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyAddressList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.parentResourceId">ParentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.totalAddresses">TotalAddresses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.addressesInput">AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.parentResourceId"></a>

```csharp
public string ParentResourceId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.timeouts"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference</a>

---

##### `TotalAddresses`<sup>Required</sup> <a name="TotalAddresses" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.totalAddresses"></a>

```csharp
public double TotalAddresses { get; }
```

- *Type:* double

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.addressesInput"></a>

```csharp
public string[] AddressesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.networkFirewallPolicyIdInput"></a>

```csharp
public string NetworkFirewallPolicyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyAddressListConfig <a name="NetworkFirewallNetworkFirewallPolicyAddressListConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyAddressListConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Addresses,
    string Name,
    string NetworkFirewallPolicyId,
    string Type,
    string Id = null,
    NetworkFirewallNetworkFirewallPolicyAddressListTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.addresses">Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#addresses NetworkFirewallNetworkFirewallPolicyAddressList#addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#name NetworkFirewallNetworkFirewallPolicyAddressList#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyAddressList#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#type NetworkFirewallNetworkFirewallPolicyAddressList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#id NetworkFirewallNetworkFirewallPolicyAddressList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts">NetworkFirewallNetworkFirewallPolicyAddressListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.addresses"></a>

```csharp
public string[] Addresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#addresses NetworkFirewallNetworkFirewallPolicyAddressList#addresses}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#name NetworkFirewallNetworkFirewallPolicyAddressList#name}.

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyAddressList#network_firewall_policy_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#type NetworkFirewallNetworkFirewallPolicyAddressList#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#id NetworkFirewallNetworkFirewallPolicyAddressList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListConfig.property.timeouts"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyAddressListTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts">NetworkFirewallNetworkFirewallPolicyAddressListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#timeouts NetworkFirewallNetworkFirewallPolicyAddressList#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyAddressListTimeouts <a name="NetworkFirewallNetworkFirewallPolicyAddressListTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyAddressListTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#create NetworkFirewallNetworkFirewallPolicyAddressList#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#delete NetworkFirewallNetworkFirewallPolicyAddressList#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#update NetworkFirewallNetworkFirewallPolicyAddressList#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#create NetworkFirewallNetworkFirewallPolicyAddressList#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#delete NetworkFirewallNetworkFirewallPolicyAddressList#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_address_list#update NetworkFirewallNetworkFirewallPolicyAddressList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyAddressList.NetworkFirewallNetworkFirewallPolicyAddressListTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



