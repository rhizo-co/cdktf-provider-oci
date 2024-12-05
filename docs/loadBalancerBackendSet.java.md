# `loadBalancerBackendset` Submodule <a name="`loadBalancerBackendset` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerBackendset <a name="LoadBalancerBackendset" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset oci_load_balancer_backendset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendset;

LoadBalancerBackendset.Builder.create(Construct scope, java.lang.String id)
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
    .healthChecker(LoadBalancerBackendsetHealthChecker)
    .loadBalancerId(java.lang.String)
    .name(java.lang.String)
    .policy(java.lang.String)
//  .backendMaxConnections(java.lang.Number)
//  .id(java.lang.String)
//  .lbCookieSessionPersistenceConfiguration(LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration)
//  .sessionPersistenceConfiguration(LoadBalancerBackendsetSessionPersistenceConfiguration)
//  .sslConfiguration(LoadBalancerBackendsetSslConfiguration)
//  .timeouts(LoadBalancerBackendsetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.backendMaxConnections">backendMaxConnections</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.lbCookieSessionPersistenceConfiguration">lbCookieSessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | lb_cookie_session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.sessionPersistenceConfiguration">sessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.sslConfiguration">sslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.healthChecker"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#health_checker LoadBalancerBackendset#health_checker}

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.loadBalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}.

---

##### `backendMaxConnections`<sup>Optional</sup> <a name="backendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.backendMaxConnections"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lbCookieSessionPersistenceConfiguration`<sup>Optional</sup> <a name="lbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.lbCookieSessionPersistenceConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

lb_cookie_session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#lb_cookie_session_persistence_configuration LoadBalancerBackendset#lb_cookie_session_persistence_configuration}

---

##### `sessionPersistenceConfiguration`<sup>Optional</sup> <a name="sessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.sessionPersistenceConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#session_persistence_configuration LoadBalancerBackendset#session_persistence_configuration}

---

##### `sslConfiguration`<sup>Optional</sup> <a name="sslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.sslConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#ssl_configuration LoadBalancerBackendset#ssl_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeouts LoadBalancerBackendset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker">putHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration">putLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration">putSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration">putSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetBackendMaxConnections">resetBackendMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetLbCookieSessionPersistenceConfiguration">resetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSessionPersistenceConfiguration">resetSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSslConfiguration">resetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthChecker` <a name="putHealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker"></a>

```java
public void putHealthChecker(LoadBalancerBackendsetHealthChecker value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---

##### `putLbCookieSessionPersistenceConfiguration` <a name="putLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration"></a>

```java
public void putLbCookieSessionPersistenceConfiguration(LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---

##### `putSessionPersistenceConfiguration` <a name="putSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration"></a>

```java
public void putSessionPersistenceConfiguration(LoadBalancerBackendsetSessionPersistenceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---

##### `putSslConfiguration` <a name="putSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration"></a>

```java
public void putSslConfiguration(LoadBalancerBackendsetSslConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts"></a>

```java
public void putTimeouts(LoadBalancerBackendsetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

---

##### `resetBackendMaxConnections` <a name="resetBackendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetBackendMaxConnections"></a>

```java
public void resetBackendMaxConnections()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetId"></a>

```java
public void resetId()
```

##### `resetLbCookieSessionPersistenceConfiguration` <a name="resetLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetLbCookieSessionPersistenceConfiguration"></a>

```java
public void resetLbCookieSessionPersistenceConfiguration()
```

##### `resetSessionPersistenceConfiguration` <a name="resetSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSessionPersistenceConfiguration"></a>

```java
public void resetSessionPersistenceConfiguration()
```

##### `resetSslConfiguration` <a name="resetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSslConfiguration"></a>

```java
public void resetSslConfiguration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerBackendset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendset;

LoadBalancerBackendset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendset;

LoadBalancerBackendset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendset;

LoadBalancerBackendset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendset;

LoadBalancerBackendset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadBalancerBackendset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoadBalancerBackendset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadBalancerBackendset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadBalancerBackendset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerBackendset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backend">backend</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList">LoadBalancerBackendsetBackendList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference">LoadBalancerBackendsetHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfiguration">lbCookieSessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfiguration">sessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfiguration">sslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference">LoadBalancerBackendsetSslConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference">LoadBalancerBackendsetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnectionsInput">backendMaxConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthCheckerInput">healthCheckerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfigurationInput">lbCookieSessionPersistenceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfigurationInput">sessionPersistenceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfigurationInput">sslConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnections">backendMaxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backend"></a>

```java
public LoadBalancerBackendsetBackendList getBackend();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList">LoadBalancerBackendsetBackendList</a>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthChecker"></a>

```java
public LoadBalancerBackendsetHealthCheckerOutputReference getHealthChecker();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference">LoadBalancerBackendsetHealthCheckerOutputReference</a>

---

##### `lbCookieSessionPersistenceConfiguration`<sup>Required</sup> <a name="lbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfiguration"></a>

```java
public LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference getLbCookieSessionPersistenceConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference</a>

---

##### `sessionPersistenceConfiguration`<sup>Required</sup> <a name="sessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfiguration"></a>

```java
public LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference getSessionPersistenceConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference</a>

---

##### `sslConfiguration`<sup>Required</sup> <a name="sslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfiguration"></a>

```java
public LoadBalancerBackendsetSslConfigurationOutputReference getSslConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference">LoadBalancerBackendsetSslConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeouts"></a>

```java
public LoadBalancerBackendsetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference">LoadBalancerBackendsetTimeoutsOutputReference</a>

---

##### `backendMaxConnectionsInput`<sup>Optional</sup> <a name="backendMaxConnectionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnectionsInput"></a>

```java
public java.lang.Number getBackendMaxConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckerInput`<sup>Optional</sup> <a name="healthCheckerInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthCheckerInput"></a>

```java
public LoadBalancerBackendsetHealthChecker getHealthCheckerInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lbCookieSessionPersistenceConfigurationInput`<sup>Optional</sup> <a name="lbCookieSessionPersistenceConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfigurationInput"></a>

```java
public LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration getLbCookieSessionPersistenceConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerIdInput"></a>

```java
public java.lang.String getLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `sessionPersistenceConfigurationInput`<sup>Optional</sup> <a name="sessionPersistenceConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfigurationInput"></a>

```java
public LoadBalancerBackendsetSessionPersistenceConfiguration getSessionPersistenceConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---

##### `sslConfigurationInput`<sup>Optional</sup> <a name="sslConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfigurationInput"></a>

```java
public LoadBalancerBackendsetSslConfiguration getSslConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

---

##### `backendMaxConnections`<sup>Required</sup> <a name="backendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnections"></a>

```java
public java.lang.Number getBackendMaxConnections();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerBackendsetBackend <a name="LoadBalancerBackendsetBackend" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetBackend;

LoadBalancerBackendsetBackend.builder()
    .build();
```


### LoadBalancerBackendsetConfig <a name="LoadBalancerBackendsetConfig" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetConfig;

LoadBalancerBackendsetConfig.builder()
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
    .healthChecker(LoadBalancerBackendsetHealthChecker)
    .loadBalancerId(java.lang.String)
    .name(java.lang.String)
    .policy(java.lang.String)
//  .backendMaxConnections(java.lang.Number)
//  .id(java.lang.String)
//  .lbCookieSessionPersistenceConfiguration(LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration)
//  .sessionPersistenceConfiguration(LoadBalancerBackendsetSessionPersistenceConfiguration)
//  .sslConfiguration(LoadBalancerBackendsetSslConfiguration)
//  .timeouts(LoadBalancerBackendsetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.backendMaxConnections">backendMaxConnections</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lbCookieSessionPersistenceConfiguration">lbCookieSessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | lb_cookie_session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sessionPersistenceConfiguration">sessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sslConfiguration">sslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.healthChecker"></a>

```java
public LoadBalancerBackendsetHealthChecker getHealthChecker();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#health_checker LoadBalancerBackendset#health_checker}

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}.

---

##### `backendMaxConnections`<sup>Optional</sup> <a name="backendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.backendMaxConnections"></a>

```java
public java.lang.Number getBackendMaxConnections();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lbCookieSessionPersistenceConfiguration`<sup>Optional</sup> <a name="lbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lbCookieSessionPersistenceConfiguration"></a>

```java
public LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration getLbCookieSessionPersistenceConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

lb_cookie_session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#lb_cookie_session_persistence_configuration LoadBalancerBackendset#lb_cookie_session_persistence_configuration}

---

##### `sessionPersistenceConfiguration`<sup>Optional</sup> <a name="sessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sessionPersistenceConfiguration"></a>

```java
public LoadBalancerBackendsetSessionPersistenceConfiguration getSessionPersistenceConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#session_persistence_configuration LoadBalancerBackendset#session_persistence_configuration}

---

##### `sslConfiguration`<sup>Optional</sup> <a name="sslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sslConfiguration"></a>

```java
public LoadBalancerBackendsetSslConfiguration getSslConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#ssl_configuration LoadBalancerBackendset#ssl_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.timeouts"></a>

```java
public LoadBalancerBackendsetTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeouts LoadBalancerBackendset#timeouts}

---

### LoadBalancerBackendsetHealthChecker <a name="LoadBalancerBackendsetHealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetHealthChecker;

LoadBalancerBackendsetHealthChecker.builder()
    .protocol(java.lang.String)
//  .intervalMs(java.lang.Number)
//  .isForcePlainText(java.lang.Boolean)
//  .isForcePlainText(IResolvable)
//  .port(java.lang.Number)
//  .responseBodyRegex(java.lang.String)
//  .retries(java.lang.Number)
//  .returnCode(java.lang.Number)
//  .timeoutInMillis(java.lang.Number)
//  .urlPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.intervalMs">intervalMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.isForcePlainText">isForcePlainText</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.responseBodyRegex">responseBodyRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.retries">retries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.returnCode">returnCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.timeoutInMillis">timeoutInMillis</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}.

---

##### `intervalMs`<sup>Optional</sup> <a name="intervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.intervalMs"></a>

```java
public java.lang.Number getIntervalMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}.

---

##### `isForcePlainText`<sup>Optional</sup> <a name="isForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.isForcePlainText"></a>

```java
public java.lang.Object getIsForcePlainText();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}.

---

##### `responseBodyRegex`<sup>Optional</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.responseBodyRegex"></a>

```java
public java.lang.String getResponseBodyRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}.

---

##### `returnCode`<sup>Optional</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.returnCode"></a>

```java
public java.lang.Number getReturnCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}.

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.timeoutInMillis"></a>

```java
public java.lang.Number getTimeoutInMillis();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}.

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}.

---

### LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration <a name="LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration;

LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.builder()
//  .cookieName(java.lang.String)
//  .disableFallback(java.lang.Boolean)
//  .disableFallback(IResolvable)
//  .domain(java.lang.String)
//  .isHttpOnly(java.lang.Boolean)
//  .isHttpOnly(IResolvable)
//  .isSecure(java.lang.Boolean)
//  .isSecure(IResolvable)
//  .maxAgeInSeconds(java.lang.Number)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.disableFallback">disableFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isHttpOnly">isHttpOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isSecure">isSecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}. |

---

##### `cookieName`<sup>Optional</sup> <a name="cookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

##### `disableFallback`<sup>Optional</sup> <a name="disableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.disableFallback"></a>

```java
public java.lang.Object getDisableFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}.

---

##### `isHttpOnly`<sup>Optional</sup> <a name="isHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isHttpOnly"></a>

```java
public java.lang.Object getIsHttpOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}.

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isSecure"></a>

```java
public java.lang.Object getIsSecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}.

---

##### `maxAgeInSeconds`<sup>Optional</sup> <a name="maxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}.

---

### LoadBalancerBackendsetSessionPersistenceConfiguration <a name="LoadBalancerBackendsetSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetSessionPersistenceConfiguration;

LoadBalancerBackendsetSessionPersistenceConfiguration.builder()
    .cookieName(java.lang.String)
//  .disableFallback(java.lang.Boolean)
//  .disableFallback(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.disableFallback">disableFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}. |

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

##### `disableFallback`<sup>Optional</sup> <a name="disableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.disableFallback"></a>

```java
public java.lang.Object getDisableFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

### LoadBalancerBackendsetSslConfiguration <a name="LoadBalancerBackendsetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetSslConfiguration;

LoadBalancerBackendsetSslConfiguration.builder()
//  .certificateIds(java.util.List<java.lang.String>)
//  .certificateName(java.lang.String)
//  .cipherSuiteName(java.lang.String)
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
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateIds">certificateIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.cipherSuiteName">cipherSuiteName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.serverOrderPreference">serverOrderPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.trustedCertificateAuthorityIds">trustedCertificateAuthorityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyDepth">verifyDepth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyPeerCertificate">verifyPeerCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}. |

---

##### `certificateIds`<sup>Optional</sup> <a name="certificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateIds"></a>

```java
public java.util.List<java.lang.String> getCertificateIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}.

---

##### `cipherSuiteName`<sup>Optional</sup> <a name="cipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.cipherSuiteName"></a>

```java
public java.lang.String getCipherSuiteName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}.

---

##### `serverOrderPreference`<sup>Optional</sup> <a name="serverOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.serverOrderPreference"></a>

```java
public java.lang.String getServerOrderPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}.

---

##### `trustedCertificateAuthorityIds`<sup>Optional</sup> <a name="trustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.trustedCertificateAuthorityIds"></a>

```java
public java.util.List<java.lang.String> getTrustedCertificateAuthorityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}.

---

##### `verifyDepth`<sup>Optional</sup> <a name="verifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyDepth"></a>

```java
public java.lang.Number getVerifyDepth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}.

---

##### `verifyPeerCertificate`<sup>Optional</sup> <a name="verifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyPeerCertificate"></a>

```java
public java.lang.Object getVerifyPeerCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}.

---

### LoadBalancerBackendsetTimeouts <a name="LoadBalancerBackendsetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetTimeouts;

LoadBalancerBackendsetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerBackendsetBackendList <a name="LoadBalancerBackendsetBackendList" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetBackendList;

new LoadBalancerBackendsetBackendList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get"></a>

```java
public LoadBalancerBackendsetBackendOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LoadBalancerBackendsetBackendOutputReference <a name="LoadBalancerBackendsetBackendOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetBackendOutputReference;

new LoadBalancerBackendsetBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.backup">backup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.drain">drain</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.offline">offline</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend">LoadBalancerBackendsetBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backup`<sup>Required</sup> <a name="backup" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.backup"></a>

```java
public IResolvable getBackup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `drain`<sup>Required</sup> <a name="drain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.drain"></a>

```java
public IResolvable getDrain();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `offline`<sup>Required</sup> <a name="offline" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.offline"></a>

```java
public IResolvable getOffline();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.internalValue"></a>

```java
public LoadBalancerBackendsetBackend getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend">LoadBalancerBackendsetBackend</a>

---


### LoadBalancerBackendsetHealthCheckerOutputReference <a name="LoadBalancerBackendsetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetHealthCheckerOutputReference;

new LoadBalancerBackendsetHealthCheckerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIntervalMs">resetIntervalMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIsForcePlainText">resetIsForcePlainText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetResponseBodyRegex">resetResponseBodyRegex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetReturnCode">resetReturnCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetTimeoutInMillis">resetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalMs` <a name="resetIntervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIntervalMs"></a>

```java
public void resetIntervalMs()
```

##### `resetIsForcePlainText` <a name="resetIsForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIsForcePlainText"></a>

```java
public void resetIsForcePlainText()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetResponseBodyRegex` <a name="resetResponseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```java
public void resetResponseBodyRegex()
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetReturnCode` <a name="resetReturnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetReturnCode"></a>

```java
public void resetReturnCode()
```

##### `resetTimeoutInMillis` <a name="resetTimeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```java
public void resetTimeoutInMillis()
```

##### `resetUrlPath` <a name="resetUrlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetUrlPath"></a>

```java
public void resetUrlPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMsInput">intervalMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainTextInput">isForcePlainTextInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegexInput">responseBodyRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCodeInput">returnCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillisInput">timeoutInMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMs">intervalMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainText">isForcePlainText</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegex">responseBodyRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCode">returnCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalMsInput`<sup>Optional</sup> <a name="intervalMsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMsInput"></a>

```java
public java.lang.Number getIntervalMsInput();
```

- *Type:* java.lang.Number

---

##### `isForcePlainTextInput`<sup>Optional</sup> <a name="isForcePlainTextInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainTextInput"></a>

```java
public java.lang.Object getIsForcePlainTextInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `responseBodyRegexInput`<sup>Optional</sup> <a name="responseBodyRegexInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```java
public java.lang.String getResponseBodyRegexInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `returnCodeInput`<sup>Optional</sup> <a name="returnCodeInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCodeInput"></a>

```java
public java.lang.Number getReturnCodeInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInMillisInput`<sup>Optional</sup> <a name="timeoutInMillisInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```java
public java.lang.Number getTimeoutInMillisInput();
```

- *Type:* java.lang.Number

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPathInput"></a>

```java
public java.lang.String getUrlPathInput();
```

- *Type:* java.lang.String

---

##### `intervalMs`<sup>Required</sup> <a name="intervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMs"></a>

```java
public java.lang.Number getIntervalMs();
```

- *Type:* java.lang.Number

---

##### `isForcePlainText`<sup>Required</sup> <a name="isForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainText"></a>

```java
public java.lang.Object getIsForcePlainText();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `responseBodyRegex`<sup>Required</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```java
public java.lang.String getResponseBodyRegex();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `returnCode`<sup>Required</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCode"></a>

```java
public java.lang.Number getReturnCode();
```

- *Type:* java.lang.Number

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```java
public java.lang.Number getTimeoutInMillis();
```

- *Type:* java.lang.Number

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.internalValue"></a>

```java
public LoadBalancerBackendsetHealthChecker getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---


### LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference <a name="LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference;

new LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetCookieName">resetCookieName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDisableFallback">resetDisableFallback</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsHttpOnly">resetIsHttpOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsSecure">resetIsSecure</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetMaxAgeInSeconds">resetMaxAgeInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookieName` <a name="resetCookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetCookieName"></a>

```java
public void resetCookieName()
```

##### `resetDisableFallback` <a name="resetDisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDisableFallback"></a>

```java
public void resetDisableFallback()
```

##### `resetDomain` <a name="resetDomain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetIsHttpOnly` <a name="resetIsHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsHttpOnly"></a>

```java
public void resetIsHttpOnly()
```

##### `resetIsSecure` <a name="resetIsSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsSecure"></a>

```java
public void resetIsSecure()
```

##### `resetMaxAgeInSeconds` <a name="resetMaxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetMaxAgeInSeconds"></a>

```java
public void resetMaxAgeInSeconds()
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallbackInput">disableFallbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnlyInput">isHttpOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecureInput">isSecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback">disableFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly">isHttpOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure">isSecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieNameInput"></a>

```java
public java.lang.String getCookieNameInput();
```

- *Type:* java.lang.String

---

##### `disableFallbackInput`<sup>Optional</sup> <a name="disableFallbackInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallbackInput"></a>

```java
public java.lang.Object getDisableFallbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `isHttpOnlyInput`<sup>Optional</sup> <a name="isHttpOnlyInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnlyInput"></a>

```java
public java.lang.Object getIsHttpOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSecureInput`<sup>Optional</sup> <a name="isSecureInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecureInput"></a>

```java
public java.lang.Object getIsSecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSecondsInput"></a>

```java
public java.lang.Number getMaxAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

---

##### `disableFallback`<sup>Required</sup> <a name="disableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```java
public java.lang.Object getDisableFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `isHttpOnly`<sup>Required</sup> <a name="isHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly"></a>

```java
public java.lang.Object getIsHttpOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure"></a>

```java
public java.lang.Object getIsSecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```java
public LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---


### LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference <a name="LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference;

new LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resetDisableFallback">resetDisableFallback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableFallback` <a name="resetDisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resetDisableFallback"></a>

```java
public void resetDisableFallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallbackInput">disableFallbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallback">disableFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieNameInput"></a>

```java
public java.lang.String getCookieNameInput();
```

- *Type:* java.lang.String

---

##### `disableFallbackInput`<sup>Optional</sup> <a name="disableFallbackInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallbackInput"></a>

```java
public java.lang.Object getDisableFallbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

---

##### `disableFallback`<sup>Required</sup> <a name="disableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```java
public java.lang.Object getDisableFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```java
public LoadBalancerBackendsetSessionPersistenceConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---


### LoadBalancerBackendsetSslConfigurationOutputReference <a name="LoadBalancerBackendsetSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetSslConfigurationOutputReference;

new LoadBalancerBackendsetSslConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateIds">resetCertificateIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCipherSuiteName">resetCipherSuiteName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetServerOrderPreference">resetServerOrderPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds">resetTrustedCertificateAuthorityIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyDepth">resetVerifyDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyPeerCertificate">resetVerifyPeerCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateIds` <a name="resetCertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateIds"></a>

```java
public void resetCertificateIds()
```

##### `resetCertificateName` <a name="resetCertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateName"></a>

```java
public void resetCertificateName()
```

##### `resetCipherSuiteName` <a name="resetCipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCipherSuiteName"></a>

```java
public void resetCipherSuiteName()
```

##### `resetProtocols` <a name="resetProtocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetServerOrderPreference` <a name="resetServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetServerOrderPreference"></a>

```java
public void resetServerOrderPreference()
```

##### `resetTrustedCertificateAuthorityIds` <a name="resetTrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds"></a>

```java
public void resetTrustedCertificateAuthorityIds()
```

##### `resetVerifyDepth` <a name="resetVerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyDepth"></a>

```java
public void resetVerifyDepth()
```

##### `resetVerifyPeerCertificate` <a name="resetVerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyPeerCertificate"></a>

```java
public void resetVerifyPeerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIdsInput">certificateIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteNameInput">cipherSuiteNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreferenceInput">serverOrderPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput">trustedCertificateAuthorityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepthInput">verifyDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificateInput">verifyPeerCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIds">certificateIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteName">cipherSuiteName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreference">serverOrderPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">trustedCertificateAuthorityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepth">verifyDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificate">verifyPeerCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateIdsInput`<sup>Optional</sup> <a name="certificateIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIdsInput"></a>

```java
public java.util.List<java.lang.String> getCertificateIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateNameInput"></a>

```java
public java.lang.String getCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `cipherSuiteNameInput`<sup>Optional</sup> <a name="cipherSuiteNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteNameInput"></a>

```java
public java.lang.String getCipherSuiteNameInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverOrderPreferenceInput`<sup>Optional</sup> <a name="serverOrderPreferenceInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreferenceInput"></a>

```java
public java.lang.String getServerOrderPreferenceInput();
```

- *Type:* java.lang.String

---

##### `trustedCertificateAuthorityIdsInput`<sup>Optional</sup> <a name="trustedCertificateAuthorityIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput"></a>

```java
public java.util.List<java.lang.String> getTrustedCertificateAuthorityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifyDepthInput`<sup>Optional</sup> <a name="verifyDepthInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepthInput"></a>

```java
public java.lang.Number getVerifyDepthInput();
```

- *Type:* java.lang.Number

---

##### `verifyPeerCertificateInput`<sup>Optional</sup> <a name="verifyPeerCertificateInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificateInput"></a>

```java
public java.lang.Object getVerifyPeerCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificateIds`<sup>Required</sup> <a name="certificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIds"></a>

```java
public java.util.List<java.lang.String> getCertificateIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `cipherSuiteName`<sup>Required</sup> <a name="cipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteName"></a>

```java
public java.lang.String getCipherSuiteName();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverOrderPreference`<sup>Required</sup> <a name="serverOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreference"></a>

```java
public java.lang.String getServerOrderPreference();
```

- *Type:* java.lang.String

---

##### `trustedCertificateAuthorityIds`<sup>Required</sup> <a name="trustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```java
public java.util.List<java.lang.String> getTrustedCertificateAuthorityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifyDepth`<sup>Required</sup> <a name="verifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepth"></a>

```java
public java.lang.Number getVerifyDepth();
```

- *Type:* java.lang.Number

---

##### `verifyPeerCertificate`<sup>Required</sup> <a name="verifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```java
public java.lang.Object getVerifyPeerCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.internalValue"></a>

```java
public LoadBalancerBackendsetSslConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---


### LoadBalancerBackendsetTimeoutsOutputReference <a name="LoadBalancerBackendsetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_backendset.LoadBalancerBackendsetTimeoutsOutputReference;

new LoadBalancerBackendsetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

---



