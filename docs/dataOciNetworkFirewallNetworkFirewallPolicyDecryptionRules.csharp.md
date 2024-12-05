# `dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules oci_network_firewall_network_firewall_policy_decryption_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules(Construct Scope, string Id, DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetDecryptionRulePriorityOrder">ResetDecryptionRulePriorityOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDecryptionRulePriorityOrder` <a name="ResetDecryptionRulePriorityOrder" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetDecryptionRulePriorityOrder"></a>

```csharp
private void ResetDecryptionRulePriorityOrder()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRuleSummaryCollection">DecryptionRuleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRulePriorityOrderInput">DecryptionRulePriorityOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRulePriorityOrder">DecryptionRulePriorityOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DecryptionRuleSummaryCollection`<sup>Required</sup> <a name="DecryptionRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRuleSummaryCollection"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList DecryptionRuleSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.filter"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList</a>

---

##### `DecryptionRulePriorityOrderInput`<sup>Optional</sup> <a name="DecryptionRulePriorityOrderInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRulePriorityOrderInput"></a>

```csharp
public double DecryptionRulePriorityOrderInput { get; }
```

- *Type:* double

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.networkFirewallPolicyIdInput"></a>

```csharp
public string NetworkFirewallPolicyIdInput { get; }
```

- *Type:* string

---

##### `DecryptionRulePriorityOrder`<sup>Required</sup> <a name="DecryptionRulePriorityOrder" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRulePriorityOrder"></a>

```csharp
public double DecryptionRulePriorityOrder { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NetworkFirewallPolicyId,
    double DecryptionRulePriorityOrder = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.decryptionRulePriorityOrder">DecryptionRulePriorityOrder</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#decryption_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#decryption_rule_priority_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#network_firewall_policy_id}.

---

##### `DecryptionRulePriorityOrder`<sup>Optional</sup> <a name="DecryptionRulePriorityOrder" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.decryptionRulePriorityOrder"></a>

```csharp
public double DecryptionRulePriorityOrder { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#decryption_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#decryption_rule_priority_order}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#filter DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection {

};
```


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems {

};
```


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition {

};
```


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition {

};
```


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#values DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#regex DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#values DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#regex DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.get"></a>

```csharp
private DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.sourceAddress">SourceAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.destinationAddress"></a>

```csharp
public string[] DestinationAddress { get; }
```

- *Type:* string[]

---

##### `SourceAddress`<sup>Required</sup> <a name="SourceAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.sourceAddress"></a>

```csharp
public string[] SourceAddress { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.get"></a>

```csharp
private DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.condition">Condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.decryptionProfile">DecryptionProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.parentResourceId">ParentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.position">Position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.priorityOrder">PriorityOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.condition"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList Condition { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList</a>

---

##### `DecryptionProfile`<sup>Required</sup> <a name="DecryptionProfile" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.decryptionProfile"></a>

```csharp
public string DecryptionProfile { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; }
```

- *Type:* string

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```csharp
public string ParentResourceId { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.position"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList Position { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList</a>

---

##### `PriorityOrder`<sup>Required</sup> <a name="PriorityOrder" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.priorityOrder"></a>

```csharp
public string PriorityOrder { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.get"></a>

```csharp
private DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.afterRule">AfterRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.beforeRule">BeforeRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterRule`<sup>Required</sup> <a name="AfterRule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.afterRule"></a>

```csharp
public string AfterRule { get; }
```

- *Type:* string

---

##### `BeforeRule`<sup>Required</sup> <a name="BeforeRule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.beforeRule"></a>

```csharp
public string BeforeRule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.get"></a>

```csharp
private DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.get"></a>

```csharp
private DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



