# `loadBalancerLoadBalancerRoutingPolicy` Submodule <a name="`loadBalancerLoadBalancerRoutingPolicy` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerLoadBalancerRoutingPolicy <a name="LoadBalancerLoadBalancerRoutingPolicy" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy oci_load_balancer_load_balancer_routing_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicy;

LoadBalancerLoadBalancerRoutingPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .conditionLanguageVersion(java.lang.String)
    .loadBalancerId(java.lang.String)
    .name(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<LoadBalancerLoadBalancerRoutingPolicyRules>)
//  .id(java.lang.String)
//  .timeouts(LoadBalancerLoadBalancerRoutingPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition_language_version LoadBalancerLoadBalancerRoutingPolicy#condition_language_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#load_balancer_id LoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>></code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#id LoadBalancerLoadBalancerRoutingPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.conditionLanguageVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition_language_version LoadBalancerLoadBalancerRoutingPolicy#condition_language_version}.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.loadBalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#load_balancer_id LoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#rules LoadBalancerLoadBalancerRoutingPolicy#rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#id LoadBalancerLoadBalancerRoutingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#timeouts LoadBalancerLoadBalancerRoutingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<LoadBalancerLoadBalancerRoutingPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putTimeouts"></a>

```java
public void putTimeouts(LoadBalancerLoadBalancerRoutingPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerLoadBalancerRoutingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicy;

LoadBalancerLoadBalancerRoutingPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicy;

LoadBalancerLoadBalancerRoutingPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicy;

LoadBalancerLoadBalancerRoutingPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicy;

LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoadBalancerLoadBalancerRoutingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadBalancerLoadBalancerRoutingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadBalancerLoadBalancerRoutingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerLoadBalancerRoutingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList">LoadBalancerLoadBalancerRoutingPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference">LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersionInput">conditionLanguageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.rules"></a>

```java
public LoadBalancerLoadBalancerRoutingPolicyRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList">LoadBalancerLoadBalancerRoutingPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.timeouts"></a>

```java
public LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference">LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference</a>

---

##### `conditionLanguageVersionInput`<sup>Optional</sup> <a name="conditionLanguageVersionInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersionInput"></a>

```java
public java.lang.String getConditionLanguageVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerIdInput"></a>

```java
public java.lang.String getLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersion"></a>

```java
public java.lang.String getConditionLanguageVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerLoadBalancerRoutingPolicyConfig <a name="LoadBalancerLoadBalancerRoutingPolicyConfig" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicyConfig;

LoadBalancerLoadBalancerRoutingPolicyConfig.builder()
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
    .conditionLanguageVersion(java.lang.String)
    .loadBalancerId(java.lang.String)
    .name(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<LoadBalancerLoadBalancerRoutingPolicyRules>)
//  .id(java.lang.String)
//  .timeouts(LoadBalancerLoadBalancerRoutingPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition_language_version LoadBalancerLoadBalancerRoutingPolicy#condition_language_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#load_balancer_id LoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>></code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#id LoadBalancerLoadBalancerRoutingPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.conditionLanguageVersion"></a>

```java
public java.lang.String getConditionLanguageVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition_language_version LoadBalancerLoadBalancerRoutingPolicy#condition_language_version}.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#load_balancer_id LoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#rules LoadBalancerLoadBalancerRoutingPolicy#rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#id LoadBalancerLoadBalancerRoutingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.timeouts"></a>

```java
public LoadBalancerLoadBalancerRoutingPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#timeouts LoadBalancerLoadBalancerRoutingPolicy#timeouts}

---

### LoadBalancerLoadBalancerRoutingPolicyRules <a name="LoadBalancerLoadBalancerRoutingPolicyRules" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicyRules;

LoadBalancerLoadBalancerRoutingPolicyRules.builder()
    .actions(IResolvable)
    .actions(java.util.List<LoadBalancerLoadBalancerRoutingPolicyRulesActions>)
    .condition(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.actions">actions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>></code> | actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition LoadBalancerLoadBalancerRoutingPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.actions"></a>

```java
public java.lang.Object getActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#actions LoadBalancerLoadBalancerRoutingPolicy#actions}

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition LoadBalancerLoadBalancerRoutingPolicy#condition}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}.

---

### LoadBalancerLoadBalancerRoutingPolicyRulesActions <a name="LoadBalancerLoadBalancerRoutingPolicyRulesActions" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicyRulesActions;

LoadBalancerLoadBalancerRoutingPolicyRulesActions.builder()
    .backendSetName(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#backend_set_name LoadBalancerLoadBalancerRoutingPolicy#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}. |

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#backend_set_name LoadBalancerLoadBalancerRoutingPolicy#backend_set_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}.

---

### LoadBalancerLoadBalancerRoutingPolicyTimeouts <a name="LoadBalancerLoadBalancerRoutingPolicyTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicyTimeouts;

LoadBalancerLoadBalancerRoutingPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#create LoadBalancerLoadBalancerRoutingPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#delete LoadBalancerLoadBalancerRoutingPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#update LoadBalancerLoadBalancerRoutingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#create LoadBalancerLoadBalancerRoutingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#delete LoadBalancerLoadBalancerRoutingPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#update LoadBalancerLoadBalancerRoutingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerLoadBalancerRoutingPolicyRulesActionsList <a name="LoadBalancerLoadBalancerRoutingPolicyRulesActionsList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList;

new LoadBalancerLoadBalancerRoutingPolicyRulesActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get"></a>

```java
public LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>>

---


### LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference <a name="LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference;

new LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetNameInput">backendSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendSetNameInput`<sup>Optional</sup> <a name="backendSetNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetNameInput"></a>

```java
public java.lang.String getBackendSetNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>

---


### LoadBalancerLoadBalancerRoutingPolicyRulesList <a name="LoadBalancerLoadBalancerRoutingPolicyRulesList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicyRulesList;

new LoadBalancerLoadBalancerRoutingPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.get"></a>

```java
public LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>>

---


### LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference <a name="LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference;

new LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.putActions">putActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.putActions"></a>

```java
public void putActions(IResolvable OR java.util.List<LoadBalancerLoadBalancerRoutingPolicyRulesActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.putActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList">LoadBalancerLoadBalancerRoutingPolicyRulesActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actionsInput">actionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actions"></a>

```java
public LoadBalancerLoadBalancerRoutingPolicyRulesActionsList getActions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList">LoadBalancerLoadBalancerRoutingPolicyRulesActionsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actionsInput"></a>

```java
public java.lang.Object getActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>

---


### LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference <a name="LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer_routing_policy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference;

new LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>

---



