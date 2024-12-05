# `dataOciNetworkFirewallNetworkFirewallPolicySecurityRule` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicySecurityRule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRule <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rule oci_network_firewall_network_firewall_policy_security_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRule(Construct Scope, string Id, DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig">DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig">DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicySecurityRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicySecurityRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicySecurityRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicySecurityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicySecurityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.condition">Condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.inspection">Inspection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.parentResourceId">ParentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.position">Position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.priorityOrder">PriorityOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.condition"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList Condition { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Inspection`<sup>Required</sup> <a name="Inspection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.inspection"></a>

```csharp
public string Inspection { get; }
```

- *Type:* string

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.parentResourceId"></a>

```csharp
public string ParentResourceId { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.position"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList Position { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList</a>

---

##### `PriorityOrder`<sup>Required</sup> <a name="PriorityOrder" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.priorityOrder"></a>

```csharp
public string PriorityOrder { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.networkFirewallPolicyIdInput"></a>

```csharp
public string NetworkFirewallPolicyIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleCondition <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleCondition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleCondition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleCondition {

};
```


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string NetworkFirewallPolicyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rule#name DataOciNetworkFirewallNetworkFirewallPolicySecurityRule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rule#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicySecurityRule#network_firewall_policy_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rule#name DataOciNetworkFirewallNetworkFirewallPolicySecurityRule#name}.

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConfig.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rule#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicySecurityRule#network_firewall_policy_id}.

---

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePosition <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePosition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePosition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePosition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePosition {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.get"></a>

```csharp
private DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.application">Application</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.service">Service</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.sourceAddress">SourceAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.url">Url</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleCondition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Application`<sup>Required</sup> <a name="Application" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.application"></a>

```csharp
public string[] Application { get; }
```

- *Type:* string[]

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.destinationAddress"></a>

```csharp
public string[] DestinationAddress { get; }
```

- *Type:* string[]

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.service"></a>

```csharp
public string[] Service { get; }
```

- *Type:* string[]

---

##### `SourceAddress`<sup>Required</sup> <a name="SourceAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.sourceAddress"></a>

```csharp
public string[] SourceAddress { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.url"></a>

```csharp
public string[] Url { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleConditionOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleCondition InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleCondition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRuleCondition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.get"></a>

```csharp
private DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.property.afterRule">AfterRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.property.beforeRule">BeforeRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePosition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePosition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterRule`<sup>Required</sup> <a name="AfterRule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.property.afterRule"></a>

```csharp
public string AfterRule { get; }
```

- *Type:* string

---

##### `BeforeRule`<sup>Required</sup> <a name="BeforeRule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.property.beforeRule"></a>

```csharp
public string BeforeRule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePositionOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePosition InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRule.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePosition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulePosition</a>

---



