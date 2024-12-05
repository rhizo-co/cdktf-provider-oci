# `dataOciLoadBalancerLoadBalancerRoutingPolicy` Submodule <a name="`dataOciLoadBalancerLoadBalancerRoutingPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicy <a name="DataOciLoadBalancerLoadBalancerRoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy oci_load_balancer_load_balancer_routing_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicy;

DataOciLoadBalancerLoadBalancerRoutingPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .loadBalancerId(java.lang.String)
    .routingPolicyName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.routingPolicyName">routingPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#routing_policy_name DataOciLoadBalancerLoadBalancerRoutingPolicy#routing_policy_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.loadBalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}.

---

##### `routingPolicyName`<sup>Required</sup> <a name="routingPolicyName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.routingPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#routing_policy_name DataOciLoadBalancerLoadBalancerRoutingPolicy#routing_policy_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancerRoutingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicy;

DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicy;

DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicy;

DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicy;

DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancerRoutingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciLoadBalancerLoadBalancerRoutingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciLoadBalancerLoadBalancerRoutingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerLoadBalancerRoutingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyNameInput">routingPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyName">routingPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersion"></a>

```java
public java.lang.String getConditionLanguageVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.rules"></a>

```java
public DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerIdInput"></a>

```java
public java.lang.String getLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `routingPolicyNameInput`<sup>Optional</sup> <a name="routingPolicyNameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyNameInput"></a>

```java
public java.lang.String getRoutingPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `routingPolicyName`<sup>Required</sup> <a name="routingPolicyName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyName"></a>

```java
public java.lang.String getRoutingPolicyName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicyConfig <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig;

DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.builder()
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
    .loadBalancerId(java.lang.String)
    .routingPolicyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.routingPolicyName">routingPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#routing_policy_name DataOciLoadBalancerLoadBalancerRoutingPolicy#routing_policy_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}.

---

##### `routingPolicyName`<sup>Required</sup> <a name="routingPolicyName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.routingPolicyName"></a>

```java
public java.lang.String getRoutingPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#routing_policy_name DataOciLoadBalancerLoadBalancerRoutingPolicy#routing_policy_name}.

---

### DataOciLoadBalancerLoadBalancerRoutingPolicyRules <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules;

DataOciLoadBalancerLoadBalancerRoutingPolicyRules.builder()
    .build();
```


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions;

DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList;

new DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get"></a>

```java
public DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference;

new DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.internalValue"></a>

```java
public DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions</a>

---


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList;

new DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.get"></a>

```java
public DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_load_balancer_load_balancer_routing_policy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference;

new DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules">DataOciLoadBalancerLoadBalancerRoutingPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actions"></a>

```java
public DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList getActions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.internalValue"></a>

```java
public DataOciLoadBalancerLoadBalancerRoutingPolicyRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules">DataOciLoadBalancerLoadBalancerRoutingPolicyRules</a>

---



