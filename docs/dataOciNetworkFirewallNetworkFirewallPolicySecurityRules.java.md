# `dataOciNetworkFirewallNetworkFirewallPolicySecurityRules` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicySecurityRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRules <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRules" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules oci_network_firewall_network_firewall_policy_security_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .networkFirewallPolicyId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter>)
//  .id(java.lang.String)
//  .securityRulePriorityOrder(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.securityRulePriorityOrder">securityRulePriorityOrder</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#security_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#security_rule_priority_order}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#network_firewall_policy_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#filter DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityRulePriorityOrder`<sup>Optional</sup> <a name="securityRulePriorityOrder" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.securityRulePriorityOrder"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#security_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#security_rule_priority_order}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetSecurityRulePriorityOrder">resetSecurityRulePriorityOrder</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetId"></a>

```java
public void resetId()
```

##### `resetSecurityRulePriorityOrder` <a name="resetSecurityRulePriorityOrder" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetSecurityRulePriorityOrder"></a>

```java
public void resetSecurityRulePriorityOrder()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicySecurityRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicySecurityRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicySecurityRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicySecurityRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicySecurityRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRuleSummaryCollection">securityRuleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.networkFirewallPolicyIdInput">networkFirewallPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRulePriorityOrderInput">securityRulePriorityOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRulePriorityOrder">securityRulePriorityOrder</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.filter"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList</a>

---

##### `securityRuleSummaryCollection`<sup>Required</sup> <a name="securityRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRuleSummaryCollection"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList getSecurityRuleSummaryCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkFirewallPolicyIdInput`<sup>Optional</sup> <a name="networkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.networkFirewallPolicyIdInput"></a>

```java
public java.lang.String getNetworkFirewallPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `securityRulePriorityOrderInput`<sup>Optional</sup> <a name="securityRulePriorityOrderInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRulePriorityOrderInput"></a>

```java
public java.lang.Number getSecurityRulePriorityOrderInput();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.networkFirewallPolicyId"></a>

```java
public java.lang.String getNetworkFirewallPolicyId();
```

- *Type:* java.lang.String

---

##### `securityRulePriorityOrder`<sup>Required</sup> <a name="securityRulePriorityOrder" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRulePriorityOrder"></a>

```java
public java.lang.Number getSecurityRulePriorityOrder();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .networkFirewallPolicyId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter>)
//  .id(java.lang.String)
//  .securityRulePriorityOrder(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.securityRulePriorityOrder">securityRulePriorityOrder</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#security_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#security_rule_priority_order}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.networkFirewallPolicyId"></a>

```java
public java.lang.String getNetworkFirewallPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#network_firewall_policy_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#filter DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityRulePriorityOrder`<sup>Optional</sup> <a name="securityRulePriorityOrder" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.securityRulePriorityOrder"></a>

```java
public java.lang.Number getSecurityRulePriorityOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#security_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#security_rule_priority_order}.

---

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#values DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#regex DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#values DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#regex DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#regex}.

---

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection.builder()
    .build();
```


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems.builder()
    .build();
```


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition.builder()
    .build();
```


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition;

DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.get"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>>

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.get"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.application">application</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.service">service</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.sourceAddress">sourceAddress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.url">url</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `application`<sup>Required</sup> <a name="application" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.application"></a>

```java
public java.util.List<java.lang.String> getApplication();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.destinationAddress"></a>

```java
public java.util.List<java.lang.String> getDestinationAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.service"></a>

```java
public java.util.List<java.lang.String> getService();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddress`<sup>Required</sup> <a name="sourceAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.sourceAddress"></a>

```java
public java.util.List<java.lang.String> getSourceAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.url"></a>

```java
public java.util.List<java.lang.String> getUrl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.internalValue"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.get"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.condition">condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.inspection">inspection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.parentResourceId">parentResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.position">position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.priorityOrder">priorityOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.condition"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList getCondition();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList</a>

---

##### `inspection`<sup>Required</sup> <a name="inspection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.inspection"></a>

```java
public java.lang.String getInspection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```java
public java.lang.String getNetworkFirewallPolicyId();
```

- *Type:* java.lang.String

---

##### `parentResourceId`<sup>Required</sup> <a name="parentResourceId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```java
public java.lang.String getParentResourceId();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.position"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList getPosition();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList</a>

---

##### `priorityOrder`<sup>Required</sup> <a name="priorityOrder" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.priorityOrder"></a>

```java
public java.lang.String getPriorityOrder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.get"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.afterRule">afterRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.beforeRule">beforeRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterRule`<sup>Required</sup> <a name="afterRule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.afterRule"></a>

```java
public java.lang.String getAfterRule();
```

- *Type:* java.lang.String

---

##### `beforeRule`<sup>Required</sup> <a name="beforeRule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.beforeRule"></a>

```java
public java.lang.String getBeforeRule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.internalValue"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.get"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_firewall_network_firewall_policy_security_rules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference;

new DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.items"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.internalValue"></a>

```java
public DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection</a>

---



