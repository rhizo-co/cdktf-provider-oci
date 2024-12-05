# `loadBalancerListener` Submodule <a name="`loadBalancerListener` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerListener <a name="LoadBalancerListener" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener oci_load_balancer_listener}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListener;

LoadBalancerListener.Builder.create(Construct scope, java.lang.String id)
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
    .defaultBackendSetName(java.lang.String)
    .loadBalancerId(java.lang.String)
    .name(java.lang.String)
    .port(java.lang.Number)
    .protocol(java.lang.String)
//  .connectionConfiguration(LoadBalancerListenerConnectionConfiguration)
//  .hostnameNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .pathRouteSetName(java.lang.String)
//  .routingPolicyName(java.lang.String)
//  .ruleSetNames(java.util.List<java.lang.String>)
//  .sslConfiguration(LoadBalancerListenerSslConfiguration)
//  .timeouts(LoadBalancerListenerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.defaultBackendSetName">defaultBackendSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.hostnameNames">hostnameNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.pathRouteSetName">pathRouteSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.routingPolicyName">routingPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.ruleSetNames">ruleSetNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.sslConfiguration">sslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultBackendSetName`<sup>Required</sup> <a name="defaultBackendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.defaultBackendSetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.loadBalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}.

---

##### `connectionConfiguration`<sup>Optional</sup> <a name="connectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.connectionConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#connection_configuration LoadBalancerListener#connection_configuration}

---

##### `hostnameNames`<sup>Optional</sup> <a name="hostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.hostnameNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pathRouteSetName`<sup>Optional</sup> <a name="pathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.pathRouteSetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}.

---

##### `routingPolicyName`<sup>Optional</sup> <a name="routingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.routingPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}.

---

##### `ruleSetNames`<sup>Optional</sup> <a name="ruleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.ruleSetNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}.

---

##### `sslConfiguration`<sup>Optional</sup> <a name="sslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.sslConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#ssl_configuration LoadBalancerListener#ssl_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#timeouts LoadBalancerListener#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration">putConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration">putSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetConnectionConfiguration">resetConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetHostnameNames">resetHostnameNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetPathRouteSetName">resetPathRouteSetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRoutingPolicyName">resetRoutingPolicyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRuleSetNames">resetRuleSetNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetSslConfiguration">resetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionConfiguration` <a name="putConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration"></a>

```java
public void putConnectionConfiguration(LoadBalancerListenerConnectionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---

##### `putSslConfiguration` <a name="putSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration"></a>

```java
public void putSslConfiguration(LoadBalancerListenerSslConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts"></a>

```java
public void putTimeouts(LoadBalancerListenerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

---

##### `resetConnectionConfiguration` <a name="resetConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetConnectionConfiguration"></a>

```java
public void resetConnectionConfiguration()
```

##### `resetHostnameNames` <a name="resetHostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetHostnameNames"></a>

```java
public void resetHostnameNames()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetId"></a>

```java
public void resetId()
```

##### `resetPathRouteSetName` <a name="resetPathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetPathRouteSetName"></a>

```java
public void resetPathRouteSetName()
```

##### `resetRoutingPolicyName` <a name="resetRoutingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRoutingPolicyName"></a>

```java
public void resetRoutingPolicyName()
```

##### `resetRuleSetNames` <a name="resetRuleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRuleSetNames"></a>

```java
public void resetRuleSetNames()
```

##### `resetSslConfiguration` <a name="resetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetSslConfiguration"></a>

```java
public void resetSslConfiguration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListener;

LoadBalancerListener.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListener;

LoadBalancerListener.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListener;

LoadBalancerListener.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListener;

LoadBalancerListener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadBalancerListener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadBalancerListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadBalancerListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference">LoadBalancerListenerConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfiguration">sslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference">LoadBalancerListenerSslConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference">LoadBalancerListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfigurationInput">connectionConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetNameInput">defaultBackendSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNamesInput">hostnameNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetNameInput">pathRouteSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyNameInput">routingPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNamesInput">ruleSetNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfigurationInput">sslConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetName">defaultBackendSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNames">hostnameNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetName">pathRouteSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyName">routingPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNames">ruleSetNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfiguration"></a>

```java
public LoadBalancerListenerConnectionConfigurationOutputReference getConnectionConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference">LoadBalancerListenerConnectionConfigurationOutputReference</a>

---

##### `sslConfiguration`<sup>Required</sup> <a name="sslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfiguration"></a>

```java
public LoadBalancerListenerSslConfigurationOutputReference getSslConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference">LoadBalancerListenerSslConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeouts"></a>

```java
public LoadBalancerListenerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference">LoadBalancerListenerTimeoutsOutputReference</a>

---

##### `connectionConfigurationInput`<sup>Optional</sup> <a name="connectionConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfigurationInput"></a>

```java
public LoadBalancerListenerConnectionConfiguration getConnectionConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---

##### `defaultBackendSetNameInput`<sup>Optional</sup> <a name="defaultBackendSetNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetNameInput"></a>

```java
public java.lang.String getDefaultBackendSetNameInput();
```

- *Type:* java.lang.String

---

##### `hostnameNamesInput`<sup>Optional</sup> <a name="hostnameNamesInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnameNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerIdInput"></a>

```java
public java.lang.String getLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathRouteSetNameInput`<sup>Optional</sup> <a name="pathRouteSetNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetNameInput"></a>

```java
public java.lang.String getPathRouteSetNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `routingPolicyNameInput`<sup>Optional</sup> <a name="routingPolicyNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyNameInput"></a>

```java
public java.lang.String getRoutingPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `ruleSetNamesInput`<sup>Optional</sup> <a name="ruleSetNamesInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNamesInput"></a>

```java
public java.util.List<java.lang.String> getRuleSetNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sslConfigurationInput`<sup>Optional</sup> <a name="sslConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfigurationInput"></a>

```java
public LoadBalancerListenerSslConfiguration getSslConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

---

##### `defaultBackendSetName`<sup>Required</sup> <a name="defaultBackendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetName"></a>

```java
public java.lang.String getDefaultBackendSetName();
```

- *Type:* java.lang.String

---

##### `hostnameNames`<sup>Required</sup> <a name="hostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNames"></a>

```java
public java.util.List<java.lang.String> getHostnameNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pathRouteSetName`<sup>Required</sup> <a name="pathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetName"></a>

```java
public java.lang.String getPathRouteSetName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `routingPolicyName`<sup>Required</sup> <a name="routingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyName"></a>

```java
public java.lang.String getRoutingPolicyName();
```

- *Type:* java.lang.String

---

##### `ruleSetNames`<sup>Required</sup> <a name="ruleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNames"></a>

```java
public java.util.List<java.lang.String> getRuleSetNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerListenerConfig <a name="LoadBalancerListenerConfig" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListenerConfig;

LoadBalancerListenerConfig.builder()
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
    .defaultBackendSetName(java.lang.String)
    .loadBalancerId(java.lang.String)
    .name(java.lang.String)
    .port(java.lang.Number)
    .protocol(java.lang.String)
//  .connectionConfiguration(LoadBalancerListenerConnectionConfiguration)
//  .hostnameNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .pathRouteSetName(java.lang.String)
//  .routingPolicyName(java.lang.String)
//  .ruleSetNames(java.util.List<java.lang.String>)
//  .sslConfiguration(LoadBalancerListenerSslConfiguration)
//  .timeouts(LoadBalancerListenerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.defaultBackendSetName">defaultBackendSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.hostnameNames">hostnameNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.pathRouteSetName">pathRouteSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.routingPolicyName">routingPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.ruleSetNames">ruleSetNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.sslConfiguration">sslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultBackendSetName`<sup>Required</sup> <a name="defaultBackendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.defaultBackendSetName"></a>

```java
public java.lang.String getDefaultBackendSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}.

---

##### `connectionConfiguration`<sup>Optional</sup> <a name="connectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connectionConfiguration"></a>

```java
public LoadBalancerListenerConnectionConfiguration getConnectionConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#connection_configuration LoadBalancerListener#connection_configuration}

---

##### `hostnameNames`<sup>Optional</sup> <a name="hostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.hostnameNames"></a>

```java
public java.util.List<java.lang.String> getHostnameNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pathRouteSetName`<sup>Optional</sup> <a name="pathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.pathRouteSetName"></a>

```java
public java.lang.String getPathRouteSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}.

---

##### `routingPolicyName`<sup>Optional</sup> <a name="routingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.routingPolicyName"></a>

```java
public java.lang.String getRoutingPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}.

---

##### `ruleSetNames`<sup>Optional</sup> <a name="ruleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.ruleSetNames"></a>

```java
public java.util.List<java.lang.String> getRuleSetNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}.

---

##### `sslConfiguration`<sup>Optional</sup> <a name="sslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.sslConfiguration"></a>

```java
public LoadBalancerListenerSslConfiguration getSslConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#ssl_configuration LoadBalancerListener#ssl_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.timeouts"></a>

```java
public LoadBalancerListenerTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#timeouts LoadBalancerListener#timeouts}

---

### LoadBalancerListenerConnectionConfiguration <a name="LoadBalancerListenerConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListenerConnectionConfiguration;

LoadBalancerListenerConnectionConfiguration.builder()
    .idleTimeoutInSeconds(java.lang.String)
//  .backendTcpProxyProtocolOptions(java.util.List<java.lang.String>)
//  .backendTcpProxyProtocolVersion(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.idleTimeoutInSeconds">idleTimeoutInSeconds</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolOptions">backendTcpProxyProtocolOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolVersion">backendTcpProxyProtocolVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}. |

---

##### `idleTimeoutInSeconds`<sup>Required</sup> <a name="idleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.idleTimeoutInSeconds"></a>

```java
public java.lang.String getIdleTimeoutInSeconds();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}.

---

##### `backendTcpProxyProtocolOptions`<sup>Optional</sup> <a name="backendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolOptions"></a>

```java
public java.util.List<java.lang.String> getBackendTcpProxyProtocolOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}.

---

##### `backendTcpProxyProtocolVersion`<sup>Optional</sup> <a name="backendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolVersion"></a>

```java
public java.lang.Number getBackendTcpProxyProtocolVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}.

---

### LoadBalancerListenerSslConfiguration <a name="LoadBalancerListenerSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListenerSslConfiguration;

LoadBalancerListenerSslConfiguration.builder()
//  .certificateIds(java.util.List<java.lang.String>)
//  .certificateName(java.lang.String)
//  .cipherSuiteName(java.lang.String)
//  .hasSessionResumption(java.lang.Boolean)
//  .hasSessionResumption(IResolvable)
//  .protocols(java.util.List<java.lang.String>)
//  .serverOrderPreference(java.lang.String)
//  .trustedCertificateAuthorityIds(java.util.List<java.lang.String>)
//  .verifyDepth(java.lang.Number)
//  .verifyPeerCertificate(java.lang.Boolean)
//  .verifyPeerCertificate(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateIds">certificateIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.cipherSuiteName">cipherSuiteName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.hasSessionResumption">hasSessionResumption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.serverOrderPreference">serverOrderPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.trustedCertificateAuthorityIds">trustedCertificateAuthorityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyDepth">verifyDepth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyPeerCertificate">verifyPeerCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}. |

---

##### `certificateIds`<sup>Optional</sup> <a name="certificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateIds"></a>

```java
public java.util.List<java.lang.String> getCertificateIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}.

---

##### `cipherSuiteName`<sup>Optional</sup> <a name="cipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.cipherSuiteName"></a>

```java
public java.lang.String getCipherSuiteName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}.

---

##### `hasSessionResumption`<sup>Optional</sup> <a name="hasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.hasSessionResumption"></a>

```java
public java.lang.Object getHasSessionResumption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}.

---

##### `serverOrderPreference`<sup>Optional</sup> <a name="serverOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.serverOrderPreference"></a>

```java
public java.lang.String getServerOrderPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}.

---

##### `trustedCertificateAuthorityIds`<sup>Optional</sup> <a name="trustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.trustedCertificateAuthorityIds"></a>

```java
public java.util.List<java.lang.String> getTrustedCertificateAuthorityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}.

---

##### `verifyDepth`<sup>Optional</sup> <a name="verifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyDepth"></a>

```java
public java.lang.Number getVerifyDepth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}.

---

##### `verifyPeerCertificate`<sup>Optional</sup> <a name="verifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyPeerCertificate"></a>

```java
public java.lang.Object getVerifyPeerCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}.

---

### LoadBalancerListenerTimeouts <a name="LoadBalancerListenerTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListenerTimeouts;

LoadBalancerListenerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerListenerConnectionConfigurationOutputReference <a name="LoadBalancerListenerConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListenerConnectionConfigurationOutputReference;

new LoadBalancerListenerConnectionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolOptions">resetBackendTcpProxyProtocolOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolVersion">resetBackendTcpProxyProtocolVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendTcpProxyProtocolOptions` <a name="resetBackendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolOptions"></a>

```java
public void resetBackendTcpProxyProtocolOptions()
```

##### `resetBackendTcpProxyProtocolVersion` <a name="resetBackendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolVersion"></a>

```java
public void resetBackendTcpProxyProtocolVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptionsInput">backendTcpProxyProtocolOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersionInput">backendTcpProxyProtocolVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSecondsInput">idleTimeoutInSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptions">backendTcpProxyProtocolOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersion">backendTcpProxyProtocolVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSeconds">idleTimeoutInSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendTcpProxyProtocolOptionsInput`<sup>Optional</sup> <a name="backendTcpProxyProtocolOptionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptionsInput"></a>

```java
public java.util.List<java.lang.String> getBackendTcpProxyProtocolOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendTcpProxyProtocolVersionInput`<sup>Optional</sup> <a name="backendTcpProxyProtocolVersionInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersionInput"></a>

```java
public java.lang.Number getBackendTcpProxyProtocolVersionInput();
```

- *Type:* java.lang.Number

---

##### `idleTimeoutInSecondsInput`<sup>Optional</sup> <a name="idleTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSecondsInput"></a>

```java
public java.lang.String getIdleTimeoutInSecondsInput();
```

- *Type:* java.lang.String

---

##### `backendTcpProxyProtocolOptions`<sup>Required</sup> <a name="backendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptions"></a>

```java
public java.util.List<java.lang.String> getBackendTcpProxyProtocolOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendTcpProxyProtocolVersion`<sup>Required</sup> <a name="backendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersion"></a>

```java
public java.lang.Number getBackendTcpProxyProtocolVersion();
```

- *Type:* java.lang.Number

---

##### `idleTimeoutInSeconds`<sup>Required</sup> <a name="idleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSeconds"></a>

```java
public java.lang.String getIdleTimeoutInSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.internalValue"></a>

```java
public LoadBalancerListenerConnectionConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---


### LoadBalancerListenerSslConfigurationOutputReference <a name="LoadBalancerListenerSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListenerSslConfigurationOutputReference;

new LoadBalancerListenerSslConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateIds">resetCertificateIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCipherSuiteName">resetCipherSuiteName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetHasSessionResumption">resetHasSessionResumption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetServerOrderPreference">resetServerOrderPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds">resetTrustedCertificateAuthorityIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyDepth">resetVerifyDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyPeerCertificate">resetVerifyPeerCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateIds` <a name="resetCertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateIds"></a>

```java
public void resetCertificateIds()
```

##### `resetCertificateName` <a name="resetCertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateName"></a>

```java
public void resetCertificateName()
```

##### `resetCipherSuiteName` <a name="resetCipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCipherSuiteName"></a>

```java
public void resetCipherSuiteName()
```

##### `resetHasSessionResumption` <a name="resetHasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetHasSessionResumption"></a>

```java
public void resetHasSessionResumption()
```

##### `resetProtocols` <a name="resetProtocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetServerOrderPreference` <a name="resetServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetServerOrderPreference"></a>

```java
public void resetServerOrderPreference()
```

##### `resetTrustedCertificateAuthorityIds` <a name="resetTrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds"></a>

```java
public void resetTrustedCertificateAuthorityIds()
```

##### `resetVerifyDepth` <a name="resetVerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyDepth"></a>

```java
public void resetVerifyDepth()
```

##### `resetVerifyPeerCertificate` <a name="resetVerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyPeerCertificate"></a>

```java
public void resetVerifyPeerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIdsInput">certificateIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteNameInput">cipherSuiteNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumptionInput">hasSessionResumptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreferenceInput">serverOrderPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput">trustedCertificateAuthorityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepthInput">verifyDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificateInput">verifyPeerCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIds">certificateIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteName">cipherSuiteName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumption">hasSessionResumption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreference">serverOrderPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">trustedCertificateAuthorityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepth">verifyDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificate">verifyPeerCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateIdsInput`<sup>Optional</sup> <a name="certificateIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIdsInput"></a>

```java
public java.util.List<java.lang.String> getCertificateIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateNameInput"></a>

```java
public java.lang.String getCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `cipherSuiteNameInput`<sup>Optional</sup> <a name="cipherSuiteNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteNameInput"></a>

```java
public java.lang.String getCipherSuiteNameInput();
```

- *Type:* java.lang.String

---

##### `hasSessionResumptionInput`<sup>Optional</sup> <a name="hasSessionResumptionInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumptionInput"></a>

```java
public java.lang.Object getHasSessionResumptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverOrderPreferenceInput`<sup>Optional</sup> <a name="serverOrderPreferenceInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreferenceInput"></a>

```java
public java.lang.String getServerOrderPreferenceInput();
```

- *Type:* java.lang.String

---

##### `trustedCertificateAuthorityIdsInput`<sup>Optional</sup> <a name="trustedCertificateAuthorityIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput"></a>

```java
public java.util.List<java.lang.String> getTrustedCertificateAuthorityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifyDepthInput`<sup>Optional</sup> <a name="verifyDepthInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepthInput"></a>

```java
public java.lang.Number getVerifyDepthInput();
```

- *Type:* java.lang.Number

---

##### `verifyPeerCertificateInput`<sup>Optional</sup> <a name="verifyPeerCertificateInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificateInput"></a>

```java
public java.lang.Object getVerifyPeerCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificateIds`<sup>Required</sup> <a name="certificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIds"></a>

```java
public java.util.List<java.lang.String> getCertificateIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `cipherSuiteName`<sup>Required</sup> <a name="cipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteName"></a>

```java
public java.lang.String getCipherSuiteName();
```

- *Type:* java.lang.String

---

##### `hasSessionResumption`<sup>Required</sup> <a name="hasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumption"></a>

```java
public java.lang.Object getHasSessionResumption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverOrderPreference`<sup>Required</sup> <a name="serverOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreference"></a>

```java
public java.lang.String getServerOrderPreference();
```

- *Type:* java.lang.String

---

##### `trustedCertificateAuthorityIds`<sup>Required</sup> <a name="trustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```java
public java.util.List<java.lang.String> getTrustedCertificateAuthorityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifyDepth`<sup>Required</sup> <a name="verifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepth"></a>

```java
public java.lang.Number getVerifyDepth();
```

- *Type:* java.lang.Number

---

##### `verifyPeerCertificate`<sup>Required</sup> <a name="verifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```java
public java.lang.Object getVerifyPeerCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.internalValue"></a>

```java
public LoadBalancerListenerSslConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---


### LoadBalancerListenerTimeoutsOutputReference <a name="LoadBalancerListenerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_listener.LoadBalancerListenerTimeoutsOutputReference;

new LoadBalancerListenerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

---



