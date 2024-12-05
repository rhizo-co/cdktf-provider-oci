# `healthChecksHttpProbe` Submodule <a name="`healthChecksHttpProbe` Submodule" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthChecksHttpProbe <a name="HealthChecksHttpProbe" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe oci_health_checks_http_probe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.health_checks_http_probe.HealthChecksHttpProbe;

HealthChecksHttpProbe.Builder.create(Construct scope, java.lang.String id)
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
    .protocol(java.lang.String)
    .targets(java.util.List<java.lang.String>)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .method(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
//  .timeouts(HealthChecksHttpProbeTimeouts)
//  .vantagePointNames(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#compartment_id HealthChecksHttpProbe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#protocol HealthChecksHttpProbe#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#targets HealthChecksHttpProbe#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#headers HealthChecksHttpProbe#headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#id HealthChecksHttpProbe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.method">method</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#method HealthChecksHttpProbe#method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#path HealthChecksHttpProbe#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#port HealthChecksHttpProbe#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#timeout_in_seconds HealthChecksHttpProbe#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.vantagePointNames">vantagePointNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#vantage_point_names HealthChecksHttpProbe#vantage_point_names}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#compartment_id HealthChecksHttpProbe#compartment_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#protocol HealthChecksHttpProbe#protocol}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.targets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#targets HealthChecksHttpProbe#targets}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.headers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#headers HealthChecksHttpProbe#headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#id HealthChecksHttpProbe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `method`<sup>Optional</sup> <a name="method" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.method"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#method HealthChecksHttpProbe#method}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#path HealthChecksHttpProbe#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#port HealthChecksHttpProbe#port}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.timeoutInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#timeout_in_seconds HealthChecksHttpProbe#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#timeouts HealthChecksHttpProbe#timeouts}

---

##### `vantagePointNames`<sup>Optional</sup> <a name="vantagePointNames" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.vantagePointNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#vantage_point_names HealthChecksHttpProbe#vantage_point_names}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetVantagePointNames">resetVantagePointNames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.putTimeouts"></a>

```java
public void putTimeouts(HealthChecksHttpProbeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a>

---

##### `resetHeaders` <a name="resetHeaders" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetId"></a>

```java
public void resetId()
```

##### `resetMethod` <a name="resetMethod" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetPort"></a>

```java
public void resetPort()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVantagePointNames` <a name="resetVantagePointNames" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetVantagePointNames"></a>

```java
public void resetVantagePointNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthChecksHttpProbe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.health_checks_http_probe.HealthChecksHttpProbe;

HealthChecksHttpProbe.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.health_checks_http_probe.HealthChecksHttpProbe;

HealthChecksHttpProbe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.health_checks_http_probe.HealthChecksHttpProbe;

HealthChecksHttpProbe.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.health_checks_http_probe.HealthChecksHttpProbe;

HealthChecksHttpProbe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HealthChecksHttpProbe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HealthChecksHttpProbe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HealthChecksHttpProbe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HealthChecksHttpProbe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HealthChecksHttpProbe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.homeRegion">homeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.resultsUrl">resultsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference">HealthChecksHttpProbeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.targetsInput">targetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.vantagePointNamesInput">vantagePointNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.vantagePointNames">vantagePointNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.homeRegion"></a>

```java
public java.lang.String getHomeRegion();
```

- *Type:* java.lang.String

---

##### `resultsUrl`<sup>Required</sup> <a name="resultsUrl" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.resultsUrl"></a>

```java
public java.lang.String getResultsUrl();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeouts"></a>

```java
public HealthChecksHttpProbeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference">HealthChecksHttpProbeTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.targetsInput"></a>

```java
public java.util.List<java.lang.String> getTargetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a>

---

##### `vantagePointNamesInput`<sup>Optional</sup> <a name="vantagePointNamesInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.vantagePointNamesInput"></a>

```java
public java.util.List<java.lang.String> getVantagePointNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `vantagePointNames`<sup>Required</sup> <a name="vantagePointNames" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.vantagePointNames"></a>

```java
public java.util.List<java.lang.String> getVantagePointNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HealthChecksHttpProbeConfig <a name="HealthChecksHttpProbeConfig" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.health_checks_http_probe.HealthChecksHttpProbeConfig;

HealthChecksHttpProbeConfig.builder()
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
    .protocol(java.lang.String)
    .targets(java.util.List<java.lang.String>)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .method(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
//  .timeouts(HealthChecksHttpProbeTimeouts)
//  .vantagePointNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#compartment_id HealthChecksHttpProbe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#protocol HealthChecksHttpProbe#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#targets HealthChecksHttpProbe#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#headers HealthChecksHttpProbe#headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#id HealthChecksHttpProbe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.method">method</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#method HealthChecksHttpProbe#method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#path HealthChecksHttpProbe#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#port HealthChecksHttpProbe#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#timeout_in_seconds HealthChecksHttpProbe#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.vantagePointNames">vantagePointNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#vantage_point_names HealthChecksHttpProbe#vantage_point_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#compartment_id HealthChecksHttpProbe#compartment_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#protocol HealthChecksHttpProbe#protocol}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#targets HealthChecksHttpProbe#targets}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#headers HealthChecksHttpProbe#headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#id HealthChecksHttpProbe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `method`<sup>Optional</sup> <a name="method" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#method HealthChecksHttpProbe#method}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#path HealthChecksHttpProbe#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#port HealthChecksHttpProbe#port}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#timeout_in_seconds HealthChecksHttpProbe#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.timeouts"></a>

```java
public HealthChecksHttpProbeTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#timeouts HealthChecksHttpProbe#timeouts}

---

##### `vantagePointNames`<sup>Optional</sup> <a name="vantagePointNames" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.vantagePointNames"></a>

```java
public java.util.List<java.lang.String> getVantagePointNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#vantage_point_names HealthChecksHttpProbe#vantage_point_names}.

---

### HealthChecksHttpProbeTimeouts <a name="HealthChecksHttpProbeTimeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.health_checks_http_probe.HealthChecksHttpProbeTimeouts;

HealthChecksHttpProbeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#create HealthChecksHttpProbe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#delete HealthChecksHttpProbe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#update HealthChecksHttpProbe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#create HealthChecksHttpProbe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#delete HealthChecksHttpProbe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#update HealthChecksHttpProbe#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthChecksHttpProbeTimeoutsOutputReference <a name="HealthChecksHttpProbeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.health_checks_http_probe.HealthChecksHttpProbeTimeoutsOutputReference;

new HealthChecksHttpProbeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a>

---



