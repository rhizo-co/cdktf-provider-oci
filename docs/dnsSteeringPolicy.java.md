# `dnsSteeringPolicy` Submodule <a name="`dnsSteeringPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsSteeringPolicy <a name="DnsSteeringPolicy" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy oci_dns_steering_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicy;

DnsSteeringPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .template(java.lang.String)
//  .answers(IResolvable)
//  .answers(java.util.List<DnsSteeringPolicyAnswers>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .healthCheckMonitorId(java.lang.String)
//  .id(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<DnsSteeringPolicyRules>)
//  .timeouts(DnsSteeringPolicyTimeouts)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#compartment_id DnsSteeringPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#display_name DnsSteeringPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.template">template</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#template DnsSteeringPolicy#template}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.answers">answers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a>></code> | answers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#defined_tags DnsSteeringPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#freeform_tags DnsSteeringPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.healthCheckMonitorId">healthCheckMonitorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#health_check_monitor_id DnsSteeringPolicy#health_check_monitor_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#id DnsSteeringPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a>></code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#ttl DnsSteeringPolicy#ttl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#compartment_id DnsSteeringPolicy#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#display_name DnsSteeringPolicy#display_name}.

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.template"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#template DnsSteeringPolicy#template}.

---

##### `answers`<sup>Optional</sup> <a name="answers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.answers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a>>

answers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answers DnsSteeringPolicy#answers}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#defined_tags DnsSteeringPolicy#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#freeform_tags DnsSteeringPolicy#freeform_tags}.

---

##### `healthCheckMonitorId`<sup>Optional</sup> <a name="healthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.healthCheckMonitorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#health_check_monitor_id DnsSteeringPolicy#health_check_monitor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#id DnsSteeringPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rules DnsSteeringPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#timeouts DnsSteeringPolicy#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#ttl DnsSteeringPolicy#ttl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putAnswers">putAnswers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetAnswers">resetAnswers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetHealthCheckMonitorId">resetHealthCheckMonitorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnswers` <a name="putAnswers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putAnswers"></a>

```java
public void putAnswers(IResolvable OR java.util.List<DnsSteeringPolicyAnswers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putAnswers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a>>

---

##### `putRules` <a name="putRules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<DnsSteeringPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putTimeouts"></a>

```java
public void putTimeouts(DnsSteeringPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a>

---

##### `resetAnswers` <a name="resetAnswers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetAnswers"></a>

```java
public void resetAnswers()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHealthCheckMonitorId` <a name="resetHealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetHealthCheckMonitorId"></a>

```java
public void resetHealthCheckMonitorId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetRules` <a name="resetRules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetRules"></a>

```java
public void resetRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtl` <a name="resetTtl" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsSteeringPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicy;

DnsSteeringPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicy;

DnsSteeringPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicy;

DnsSteeringPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicy;

DnsSteeringPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DnsSteeringPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DnsSteeringPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DnsSteeringPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DnsSteeringPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DnsSteeringPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answers">answers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList">DnsSteeringPolicyAnswersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList">DnsSteeringPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference">DnsSteeringPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answersInput">answersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorIdInput">healthCheckMonitorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorId">healthCheckMonitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `answers`<sup>Required</sup> <a name="answers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answers"></a>

```java
public DnsSteeringPolicyAnswersList getAnswers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList">DnsSteeringPolicyAnswersList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rules"></a>

```java
public DnsSteeringPolicyRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList">DnsSteeringPolicyRulesList</a>

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.selfAttribute"></a>

```java
public java.lang.String getSelfAttribute();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeouts"></a>

```java
public DnsSteeringPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference">DnsSteeringPolicyTimeoutsOutputReference</a>

---

##### `answersInput`<sup>Optional</sup> <a name="answersInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answersInput"></a>

```java
public java.lang.Object getAnswersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a>>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `healthCheckMonitorIdInput`<sup>Optional</sup> <a name="healthCheckMonitorIdInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorIdInput"></a>

```java
public java.lang.String getHealthCheckMonitorIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a>>

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `healthCheckMonitorId`<sup>Required</sup> <a name="healthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorId"></a>

```java
public java.lang.String getHealthCheckMonitorId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsSteeringPolicyAnswers <a name="DnsSteeringPolicyAnswers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyAnswers;

DnsSteeringPolicyAnswers.builder()
    .name(java.lang.String)
    .rdata(java.lang.String)
    .rtype(java.lang.String)
//  .isDisabled(java.lang.Boolean)
//  .isDisabled(IResolvable)
//  .pool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#name DnsSteeringPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rdata">rdata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rdata DnsSteeringPolicy#rdata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rtype">rtype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rtype DnsSteeringPolicy#rtype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#is_disabled DnsSteeringPolicy#is_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.pool">pool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#pool DnsSteeringPolicy#pool}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#name DnsSteeringPolicy#name}.

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rdata"></a>

```java
public java.lang.String getRdata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rdata DnsSteeringPolicy#rdata}.

---

##### `rtype`<sup>Required</sup> <a name="rtype" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rtype"></a>

```java
public java.lang.String getRtype();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rtype DnsSteeringPolicy#rtype}.

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.isDisabled"></a>

```java
public java.lang.Object getIsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#is_disabled DnsSteeringPolicy#is_disabled}.

---

##### `pool`<sup>Optional</sup> <a name="pool" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.pool"></a>

```java
public java.lang.String getPool();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#pool DnsSteeringPolicy#pool}.

---

### DnsSteeringPolicyConfig <a name="DnsSteeringPolicyConfig" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyConfig;

DnsSteeringPolicyConfig.builder()
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
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .template(java.lang.String)
//  .answers(IResolvable)
//  .answers(java.util.List<DnsSteeringPolicyAnswers>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .healthCheckMonitorId(java.lang.String)
//  .id(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<DnsSteeringPolicyRules>)
//  .timeouts(DnsSteeringPolicyTimeouts)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#compartment_id DnsSteeringPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#display_name DnsSteeringPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.template">template</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#template DnsSteeringPolicy#template}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.answers">answers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a>></code> | answers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#defined_tags DnsSteeringPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#freeform_tags DnsSteeringPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.healthCheckMonitorId">healthCheckMonitorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#health_check_monitor_id DnsSteeringPolicy#health_check_monitor_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#id DnsSteeringPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a>></code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#ttl DnsSteeringPolicy#ttl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#compartment_id DnsSteeringPolicy#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#display_name DnsSteeringPolicy#display_name}.

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#template DnsSteeringPolicy#template}.

---

##### `answers`<sup>Optional</sup> <a name="answers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.answers"></a>

```java
public java.lang.Object getAnswers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a>>

answers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answers DnsSteeringPolicy#answers}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#defined_tags DnsSteeringPolicy#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#freeform_tags DnsSteeringPolicy#freeform_tags}.

---

##### `healthCheckMonitorId`<sup>Optional</sup> <a name="healthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.healthCheckMonitorId"></a>

```java
public java.lang.String getHealthCheckMonitorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#health_check_monitor_id DnsSteeringPolicy#health_check_monitor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#id DnsSteeringPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rules DnsSteeringPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.timeouts"></a>

```java
public DnsSteeringPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#timeouts DnsSteeringPolicy#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#ttl DnsSteeringPolicy#ttl}.

---

### DnsSteeringPolicyRules <a name="DnsSteeringPolicyRules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRules;

DnsSteeringPolicyRules.builder()
    .ruleType(java.lang.String)
//  .cases(IResolvable)
//  .cases(java.util.List<DnsSteeringPolicyRulesCases>)
//  .defaultAnswerData(IResolvable)
//  .defaultAnswerData(java.util.List<DnsSteeringPolicyRulesDefaultAnswerData>)
//  .defaultCount(java.lang.Number)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rule_type DnsSteeringPolicy#rule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.cases">cases</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases">DnsSteeringPolicyRulesCases</a>></code> | cases block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultAnswerData">defaultAnswerData</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData">DnsSteeringPolicyRulesDefaultAnswerData</a>></code> | default_answer_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultCount">defaultCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#default_count DnsSteeringPolicy#default_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#description DnsSteeringPolicy#description}. |

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rule_type DnsSteeringPolicy#rule_type}.

---

##### `cases`<sup>Optional</sup> <a name="cases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.cases"></a>

```java
public java.lang.Object getCases();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases">DnsSteeringPolicyRulesCases</a>>

cases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#cases DnsSteeringPolicy#cases}

---

##### `defaultAnswerData`<sup>Optional</sup> <a name="defaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultAnswerData"></a>

```java
public java.lang.Object getDefaultAnswerData();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData">DnsSteeringPolicyRulesDefaultAnswerData</a>>

default_answer_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#default_answer_data DnsSteeringPolicy#default_answer_data}

---

##### `defaultCount`<sup>Optional</sup> <a name="defaultCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultCount"></a>

```java
public java.lang.Number getDefaultCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#default_count DnsSteeringPolicy#default_count}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#description DnsSteeringPolicy#description}.

---

### DnsSteeringPolicyRulesCases <a name="DnsSteeringPolicyRulesCases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesCases;

DnsSteeringPolicyRulesCases.builder()
//  .answerData(IResolvable)
//  .answerData(java.util.List<DnsSteeringPolicyRulesCasesAnswerData>)
//  .caseCondition(java.lang.String)
//  .count(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.answerData">answerData</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData">DnsSteeringPolicyRulesCasesAnswerData</a>></code> | answer_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.caseCondition">caseCondition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#case_condition DnsSteeringPolicy#case_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#count DnsSteeringPolicy#count}. |

---

##### `answerData`<sup>Optional</sup> <a name="answerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.answerData"></a>

```java
public java.lang.Object getAnswerData();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData">DnsSteeringPolicyRulesCasesAnswerData</a>>

answer_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_data DnsSteeringPolicy#answer_data}

---

##### `caseCondition`<sup>Optional</sup> <a name="caseCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.caseCondition"></a>

```java
public java.lang.String getCaseCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#case_condition DnsSteeringPolicy#case_condition}.

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#count DnsSteeringPolicy#count}.

---

### DnsSteeringPolicyRulesCasesAnswerData <a name="DnsSteeringPolicyRulesCasesAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesCasesAnswerData;

DnsSteeringPolicyRulesCasesAnswerData.builder()
//  .answerCondition(java.lang.String)
//  .shouldKeep(java.lang.Boolean)
//  .shouldKeep(IResolvable)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.answerCondition">answerCondition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.shouldKeep">shouldKeep</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}. |

---

##### `answerCondition`<sup>Optional</sup> <a name="answerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.answerCondition"></a>

```java
public java.lang.String getAnswerCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}.

---

##### `shouldKeep`<sup>Optional</sup> <a name="shouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.shouldKeep"></a>

```java
public java.lang.Object getShouldKeep();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}.

---

### DnsSteeringPolicyRulesDefaultAnswerData <a name="DnsSteeringPolicyRulesDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesDefaultAnswerData;

DnsSteeringPolicyRulesDefaultAnswerData.builder()
//  .answerCondition(java.lang.String)
//  .shouldKeep(java.lang.Boolean)
//  .shouldKeep(IResolvable)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.answerCondition">answerCondition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.shouldKeep">shouldKeep</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}. |

---

##### `answerCondition`<sup>Optional</sup> <a name="answerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.answerCondition"></a>

```java
public java.lang.String getAnswerCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}.

---

##### `shouldKeep`<sup>Optional</sup> <a name="shouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.shouldKeep"></a>

```java
public java.lang.Object getShouldKeep();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}.

---

### DnsSteeringPolicyTimeouts <a name="DnsSteeringPolicyTimeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyTimeouts;

DnsSteeringPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#create DnsSteeringPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#delete DnsSteeringPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#update DnsSteeringPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#create DnsSteeringPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#delete DnsSteeringPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#update DnsSteeringPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsSteeringPolicyAnswersList <a name="DnsSteeringPolicyAnswersList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyAnswersList;

new DnsSteeringPolicyAnswersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.get"></a>

```java
public DnsSteeringPolicyAnswersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a>>

---


### DnsSteeringPolicyAnswersOutputReference <a name="DnsSteeringPolicyAnswersOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyAnswersOutputReference;

new DnsSteeringPolicyAnswersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetPool">resetPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDisabled` <a name="resetIsDisabled" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetIsDisabled"></a>

```java
public void resetIsDisabled()
```

##### `resetPool` <a name="resetPool" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetPool"></a>

```java
public void resetPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabledInput">isDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.poolInput">poolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdataInput">rdataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtypeInput">rtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.pool">pool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdata">rdata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtype">rtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabledInput"></a>

```java
public java.lang.Object getIsDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `poolInput`<sup>Optional</sup> <a name="poolInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.poolInput"></a>

```java
public java.lang.String getPoolInput();
```

- *Type:* java.lang.String

---

##### `rdataInput`<sup>Optional</sup> <a name="rdataInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdataInput"></a>

```java
public java.lang.String getRdataInput();
```

- *Type:* java.lang.String

---

##### `rtypeInput`<sup>Optional</sup> <a name="rtypeInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtypeInput"></a>

```java
public java.lang.String getRtypeInput();
```

- *Type:* java.lang.String

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabled"></a>

```java
public java.lang.Object getIsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pool`<sup>Required</sup> <a name="pool" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.pool"></a>

```java
public java.lang.String getPool();
```

- *Type:* java.lang.String

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdata"></a>

```java
public java.lang.String getRdata();
```

- *Type:* java.lang.String

---

##### `rtype`<sup>Required</sup> <a name="rtype" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtype"></a>

```java
public java.lang.String getRtype();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers">DnsSteeringPolicyAnswers</a>

---


### DnsSteeringPolicyRulesCasesAnswerDataList <a name="DnsSteeringPolicyRulesCasesAnswerDataList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesCasesAnswerDataList;

new DnsSteeringPolicyRulesCasesAnswerDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.get"></a>

```java
public DnsSteeringPolicyRulesCasesAnswerDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData">DnsSteeringPolicyRulesCasesAnswerData</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData">DnsSteeringPolicyRulesCasesAnswerData</a>>

---


### DnsSteeringPolicyRulesCasesAnswerDataOutputReference <a name="DnsSteeringPolicyRulesCasesAnswerDataOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference;

new DnsSteeringPolicyRulesCasesAnswerDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetAnswerCondition">resetAnswerCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetShouldKeep">resetShouldKeep</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnswerCondition` <a name="resetAnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetAnswerCondition"></a>

```java
public void resetAnswerCondition()
```

##### `resetShouldKeep` <a name="resetShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetShouldKeep"></a>

```java
public void resetShouldKeep()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerConditionInput">answerConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeepInput">shouldKeepInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerCondition">answerCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeep">shouldKeep</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData">DnsSteeringPolicyRulesCasesAnswerData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `answerConditionInput`<sup>Optional</sup> <a name="answerConditionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerConditionInput"></a>

```java
public java.lang.String getAnswerConditionInput();
```

- *Type:* java.lang.String

---

##### `shouldKeepInput`<sup>Optional</sup> <a name="shouldKeepInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeepInput"></a>

```java
public java.lang.Object getShouldKeepInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `answerCondition`<sup>Required</sup> <a name="answerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerCondition"></a>

```java
public java.lang.String getAnswerCondition();
```

- *Type:* java.lang.String

---

##### `shouldKeep`<sup>Required</sup> <a name="shouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeep"></a>

```java
public java.lang.Object getShouldKeep();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData">DnsSteeringPolicyRulesCasesAnswerData</a>

---


### DnsSteeringPolicyRulesCasesList <a name="DnsSteeringPolicyRulesCasesList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesCasesList;

new DnsSteeringPolicyRulesCasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.get"></a>

```java
public DnsSteeringPolicyRulesCasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases">DnsSteeringPolicyRulesCases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases">DnsSteeringPolicyRulesCases</a>>

---


### DnsSteeringPolicyRulesCasesOutputReference <a name="DnsSteeringPolicyRulesCasesOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesCasesOutputReference;

new DnsSteeringPolicyRulesCasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.putAnswerData">putAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetAnswerData">resetAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCaseCondition">resetCaseCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCount">resetCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnswerData` <a name="putAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.putAnswerData"></a>

```java
public void putAnswerData(IResolvable OR java.util.List<DnsSteeringPolicyRulesCasesAnswerData> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.putAnswerData.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData">DnsSteeringPolicyRulesCasesAnswerData</a>>

---

##### `resetAnswerData` <a name="resetAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetAnswerData"></a>

```java
public void resetAnswerData()
```

##### `resetCaseCondition` <a name="resetCaseCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCaseCondition"></a>

```java
public void resetCaseCondition()
```

##### `resetCount` <a name="resetCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCount"></a>

```java
public void resetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerData">answerData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList">DnsSteeringPolicyRulesCasesAnswerDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerDataInput">answerDataInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData">DnsSteeringPolicyRulesCasesAnswerData</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseConditionInput">caseConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseCondition">caseCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases">DnsSteeringPolicyRulesCases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `answerData`<sup>Required</sup> <a name="answerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerData"></a>

```java
public DnsSteeringPolicyRulesCasesAnswerDataList getAnswerData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList">DnsSteeringPolicyRulesCasesAnswerDataList</a>

---

##### `answerDataInput`<sup>Optional</sup> <a name="answerDataInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerDataInput"></a>

```java
public java.lang.Object getAnswerDataInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData">DnsSteeringPolicyRulesCasesAnswerData</a>>

---

##### `caseConditionInput`<sup>Optional</sup> <a name="caseConditionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseConditionInput"></a>

```java
public java.lang.String getCaseConditionInput();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `caseCondition`<sup>Required</sup> <a name="caseCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseCondition"></a>

```java
public java.lang.String getCaseCondition();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases">DnsSteeringPolicyRulesCases</a>

---


### DnsSteeringPolicyRulesDefaultAnswerDataList <a name="DnsSteeringPolicyRulesDefaultAnswerDataList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesDefaultAnswerDataList;

new DnsSteeringPolicyRulesDefaultAnswerDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.get"></a>

```java
public DnsSteeringPolicyRulesDefaultAnswerDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData">DnsSteeringPolicyRulesDefaultAnswerData</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData">DnsSteeringPolicyRulesDefaultAnswerData</a>>

---


### DnsSteeringPolicyRulesDefaultAnswerDataOutputReference <a name="DnsSteeringPolicyRulesDefaultAnswerDataOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference;

new DnsSteeringPolicyRulesDefaultAnswerDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetAnswerCondition">resetAnswerCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetShouldKeep">resetShouldKeep</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnswerCondition` <a name="resetAnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetAnswerCondition"></a>

```java
public void resetAnswerCondition()
```

##### `resetShouldKeep` <a name="resetShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetShouldKeep"></a>

```java
public void resetShouldKeep()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerConditionInput">answerConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeepInput">shouldKeepInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerCondition">answerCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeep">shouldKeep</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData">DnsSteeringPolicyRulesDefaultAnswerData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `answerConditionInput`<sup>Optional</sup> <a name="answerConditionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerConditionInput"></a>

```java
public java.lang.String getAnswerConditionInput();
```

- *Type:* java.lang.String

---

##### `shouldKeepInput`<sup>Optional</sup> <a name="shouldKeepInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeepInput"></a>

```java
public java.lang.Object getShouldKeepInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `answerCondition`<sup>Required</sup> <a name="answerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerCondition"></a>

```java
public java.lang.String getAnswerCondition();
```

- *Type:* java.lang.String

---

##### `shouldKeep`<sup>Required</sup> <a name="shouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeep"></a>

```java
public java.lang.Object getShouldKeep();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData">DnsSteeringPolicyRulesDefaultAnswerData</a>

---


### DnsSteeringPolicyRulesList <a name="DnsSteeringPolicyRulesList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesList;

new DnsSteeringPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.get"></a>

```java
public DnsSteeringPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a>>

---


### DnsSteeringPolicyRulesOutputReference <a name="DnsSteeringPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyRulesOutputReference;

new DnsSteeringPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putCases">putCases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putDefaultAnswerData">putDefaultAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetCases">resetCases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultAnswerData">resetDefaultAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultCount">resetDefaultCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCases` <a name="putCases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putCases"></a>

```java
public void putCases(IResolvable OR java.util.List<DnsSteeringPolicyRulesCases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putCases.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases">DnsSteeringPolicyRulesCases</a>>

---

##### `putDefaultAnswerData` <a name="putDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putDefaultAnswerData"></a>

```java
public void putDefaultAnswerData(IResolvable OR java.util.List<DnsSteeringPolicyRulesDefaultAnswerData> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putDefaultAnswerData.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData">DnsSteeringPolicyRulesDefaultAnswerData</a>>

---

##### `resetCases` <a name="resetCases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetCases"></a>

```java
public void resetCases()
```

##### `resetDefaultAnswerData` <a name="resetDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultAnswerData"></a>

```java
public void resetDefaultAnswerData()
```

##### `resetDefaultCount` <a name="resetDefaultCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultCount"></a>

```java
public void resetDefaultCount()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.cases">cases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList">DnsSteeringPolicyRulesCasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerData">defaultAnswerData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList">DnsSteeringPolicyRulesDefaultAnswerDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.casesInput">casesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases">DnsSteeringPolicyRulesCases</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerDataInput">defaultAnswerDataInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData">DnsSteeringPolicyRulesDefaultAnswerData</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCountInput">defaultCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleTypeInput">ruleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCount">defaultCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cases`<sup>Required</sup> <a name="cases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.cases"></a>

```java
public DnsSteeringPolicyRulesCasesList getCases();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList">DnsSteeringPolicyRulesCasesList</a>

---

##### `defaultAnswerData`<sup>Required</sup> <a name="defaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerData"></a>

```java
public DnsSteeringPolicyRulesDefaultAnswerDataList getDefaultAnswerData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList">DnsSteeringPolicyRulesDefaultAnswerDataList</a>

---

##### `casesInput`<sup>Optional</sup> <a name="casesInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.casesInput"></a>

```java
public java.lang.Object getCasesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases">DnsSteeringPolicyRulesCases</a>>

---

##### `defaultAnswerDataInput`<sup>Optional</sup> <a name="defaultAnswerDataInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerDataInput"></a>

```java
public java.lang.Object getDefaultAnswerDataInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData">DnsSteeringPolicyRulesDefaultAnswerData</a>>

---

##### `defaultCountInput`<sup>Optional</sup> <a name="defaultCountInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCountInput"></a>

```java
public java.lang.Number getDefaultCountInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleTypeInput"></a>

```java
public java.lang.String getRuleTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultCount`<sup>Required</sup> <a name="defaultCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCount"></a>

```java
public java.lang.Number getDefaultCount();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules">DnsSteeringPolicyRules</a>

---


### DnsSteeringPolicyTimeoutsOutputReference <a name="DnsSteeringPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dns_steering_policy.DnsSteeringPolicyTimeoutsOutputReference;

new DnsSteeringPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a>

---



