# `networkLoadBalancerNetworkLoadBalancersBackendSetsUnified` Submodule <a name="`networkLoadBalancerNetworkLoadBalancersBackendSetsUnified` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified oci_network_load_balancer_network_load_balancers_backend_sets_unified}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified;

NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Builder.create(Construct scope, java.lang.String id)
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
    .healthChecker(NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker)
    .name(java.lang.String)
    .networkLoadBalancerId(java.lang.String)
    .policy(java.lang.String)
//  .backends(IResolvable)
//  .backends(java.util.List<NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends>)
//  .id(java.lang.String)
//  .ipVersion(java.lang.String)
//  .isFailOpen(java.lang.Boolean)
//  .isFailOpen(IResolvable)
//  .isInstantFailoverEnabled(java.lang.Boolean)
//  .isInstantFailoverEnabled(IResolvable)
//  .isPreserveSource(java.lang.Boolean)
//  .isPreserveSource(IResolvable)
//  .timeouts(NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.backends">backends</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>></code> | backends block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isFailOpen">isFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isInstantFailoverEnabled">isInstantFailoverEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isPreserveSource">isPreserveSource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.healthChecker"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#health_checker NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#health_checker}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}.

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.networkLoadBalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}.

---

##### `backends`<sup>Optional</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.backends"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>>

backends block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#backends NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#backends}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.ipVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}.

---

##### `isFailOpen`<sup>Optional</sup> <a name="isFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isFailOpen"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}.

---

##### `isInstantFailoverEnabled`<sup>Optional</sup> <a name="isInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isInstantFailoverEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}.

---

##### `isPreserveSource`<sup>Optional</sup> <a name="isPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isPreserveSource"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeouts NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends">putBackends</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker">putHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetBackends">resetBackends</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsFailOpen">resetIsFailOpen</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsInstantFailoverEnabled">resetIsInstantFailoverEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsPreserveSource">resetIsPreserveSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackends` <a name="putBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends"></a>

```java
public void putBackends(IResolvable OR java.util.List<NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>>

---

##### `putHealthChecker` <a name="putHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker"></a>

```java
public void putHealthChecker(NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts"></a>

```java
public void putTimeouts(NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

---

##### `resetBackends` <a name="resetBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetBackends"></a>

```java
public void resetBackends()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetId"></a>

```java
public void resetId()
```

##### `resetIpVersion` <a name="resetIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIpVersion"></a>

```java
public void resetIpVersion()
```

##### `resetIsFailOpen` <a name="resetIsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsFailOpen"></a>

```java
public void resetIsFailOpen()
```

##### `resetIsInstantFailoverEnabled` <a name="resetIsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsInstantFailoverEnabled"></a>

```java
public void resetIsInstantFailoverEnabled()
```

##### `resetIsPreserveSource` <a name="resetIsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsPreserveSource"></a>

```java
public void resetIsPreserveSource()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified;

NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified;

NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified;

NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified;

NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backends">backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backendsInput">backendsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthCheckerInput">healthCheckerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersionInput">ipVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpenInput">isFailOpenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabledInput">isInstantFailoverEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSourceInput">isPreserveSourceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerIdInput">networkLoadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpen">isFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabled">isInstantFailoverEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSource">isPreserveSource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backends`<sup>Required</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backends"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList getBackends();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList</a>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthChecker"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference getHealthChecker();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeouts"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference</a>

---

##### `backendsInput`<sup>Optional</sup> <a name="backendsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backendsInput"></a>

```java
public java.lang.Object getBackendsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>>

---

##### `healthCheckerInput`<sup>Optional</sup> <a name="healthCheckerInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthCheckerInput"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker getHealthCheckerInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersionInput"></a>

```java
public java.lang.String getIpVersionInput();
```

- *Type:* java.lang.String

---

##### `isFailOpenInput`<sup>Optional</sup> <a name="isFailOpenInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpenInput"></a>

```java
public java.lang.Object getIsFailOpenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isInstantFailoverEnabledInput`<sup>Optional</sup> <a name="isInstantFailoverEnabledInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabledInput"></a>

```java
public java.lang.Object getIsInstantFailoverEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPreserveSourceInput`<sup>Optional</sup> <a name="isPreserveSourceInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSourceInput"></a>

```java
public java.lang.Object getIsPreserveSourceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerIdInput`<sup>Optional</sup> <a name="networkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerIdInput"></a>

```java
public java.lang.String getNetworkLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `isFailOpen`<sup>Required</sup> <a name="isFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpen"></a>

```java
public java.lang.Object getIsFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isInstantFailoverEnabled`<sup>Required</sup> <a name="isInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabled"></a>

```java
public java.lang.Object getIsInstantFailoverEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPreserveSource`<sup>Required</sup> <a name="isPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSource"></a>

```java
public java.lang.Object getIsPreserveSource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerId"></a>

```java
public java.lang.String getNetworkLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends;

NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.builder()
    .port(java.lang.Number)
//  .ipAddress(java.lang.String)
//  .isBackup(java.lang.Boolean)
//  .isBackup(IResolvable)
//  .isDrain(java.lang.Boolean)
//  .isDrain(IResolvable)
//  .isOffline(java.lang.Boolean)
//  .isOffline(IResolvable)
//  .name(java.lang.String)
//  .targetId(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_address NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isBackup">isBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_backup NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isDrain">isDrain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_drain NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_drain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isOffline">isOffline</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_offline NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_offline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#target_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#weight NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#weight}. |

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_address NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_address}.

---

##### `isBackup`<sup>Optional</sup> <a name="isBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isBackup"></a>

```java
public java.lang.Object getIsBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_backup NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_backup}.

---

##### `isDrain`<sup>Optional</sup> <a name="isDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isDrain"></a>

```java
public java.lang.Object getIsDrain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_drain NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_drain}.

---

##### `isOffline`<sup>Optional</sup> <a name="isOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isOffline"></a>

```java
public java.lang.Object getIsOffline();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_offline NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_offline}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#target_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#target_id}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#weight NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#weight}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig;

NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.builder()
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
    .healthChecker(NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker)
    .name(java.lang.String)
    .networkLoadBalancerId(java.lang.String)
    .policy(java.lang.String)
//  .backends(IResolvable)
//  .backends(java.util.List<NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends>)
//  .id(java.lang.String)
//  .ipVersion(java.lang.String)
//  .isFailOpen(java.lang.Boolean)
//  .isFailOpen(IResolvable)
//  .isInstantFailoverEnabled(java.lang.Boolean)
//  .isInstantFailoverEnabled(IResolvable)
//  .isPreserveSource(java.lang.Boolean)
//  .isPreserveSource(IResolvable)
//  .timeouts(NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.backends">backends</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>></code> | backends block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isFailOpen">isFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isInstantFailoverEnabled">isInstantFailoverEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isPreserveSource">isPreserveSource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.healthChecker"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker getHealthChecker();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#health_checker NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#health_checker}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}.

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.networkLoadBalancerId"></a>

```java
public java.lang.String getNetworkLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}.

---

##### `backends`<sup>Optional</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.backends"></a>

```java
public java.lang.Object getBackends();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>>

backends block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#backends NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#backends}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}.

---

##### `isFailOpen`<sup>Optional</sup> <a name="isFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isFailOpen"></a>

```java
public java.lang.Object getIsFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}.

---

##### `isInstantFailoverEnabled`<sup>Optional</sup> <a name="isInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isInstantFailoverEnabled"></a>

```java
public java.lang.Object getIsInstantFailoverEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}.

---

##### `isPreserveSource`<sup>Optional</sup> <a name="isPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isPreserveSource"></a>

```java
public java.lang.Object getIsPreserveSource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.timeouts"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeouts NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeouts}

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker;

NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.builder()
    .protocol(java.lang.String)
//  .dns(NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns)
//  .intervalInMillis(java.lang.Number)
//  .port(java.lang.Number)
//  .requestData(java.lang.String)
//  .responseBodyRegex(java.lang.String)
//  .responseData(java.lang.String)
//  .retries(java.lang.Number)
//  .returnCode(java.lang.Number)
//  .timeoutInMillis(java.lang.Number)
//  .urlPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | dns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.intervalInMillis">intervalInMillis</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#interval_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#interval_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.requestData">requestData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#request_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#request_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseBodyRegex">responseBodyRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_body_regex NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseData">responseData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.retries">retries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#retries NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.returnCode">returnCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#return_code NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.timeoutInMillis">timeoutInMillis</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeout_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#url_path NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#url_path}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#protocol}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.dns"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns getDns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#dns NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#dns}

---

##### `intervalInMillis`<sup>Optional</sup> <a name="intervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.intervalInMillis"></a>

```java
public java.lang.Number getIntervalInMillis();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#interval_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#interval_in_millis}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}.

---

##### `requestData`<sup>Optional</sup> <a name="requestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.requestData"></a>

```java
public java.lang.String getRequestData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#request_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#request_data}.

---

##### `responseBodyRegex`<sup>Optional</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseBodyRegex"></a>

```java
public java.lang.String getResponseBodyRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_body_regex NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_body_regex}.

---

##### `responseData`<sup>Optional</sup> <a name="responseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseData"></a>

```java
public java.lang.String getResponseData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_data}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#retries NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#retries}.

---

##### `returnCode`<sup>Optional</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.returnCode"></a>

```java
public java.lang.Number getReturnCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#return_code NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#return_code}.

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.timeoutInMillis"></a>

```java
public java.lang.Number getTimeoutInMillis();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeout_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeout_in_millis}.

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#url_path NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#url_path}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns;

NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.builder()
    .domainName(java.lang.String)
//  .queryClass(java.lang.String)
//  .queryType(java.lang.String)
//  .rcodes(java.util.List<java.lang.String>)
//  .transportProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#domain_name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryClass">queryClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryType">queryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_type NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.rcodes">rcodes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#rcodes NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#rcodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.transportProtocol">transportProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#transport_protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#transport_protocol}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#domain_name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#domain_name}.

---

##### `queryClass`<sup>Optional</sup> <a name="queryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryClass"></a>

```java
public java.lang.String getQueryClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_class}.

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_type NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_type}.

---

##### `rcodes`<sup>Optional</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.rcodes"></a>

```java
public java.util.List<java.lang.String> getRcodes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#rcodes NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#rcodes}.

---

##### `transportProtocol`<sup>Optional</sup> <a name="transportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.transportProtocol"></a>

```java
public java.lang.String getTransportProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#transport_protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#transport_protocol}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts;

NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#create NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#delete NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#update NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#create NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#delete NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#update NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList;

new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference;

new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsBackup">resetIsBackup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsDrain">resetIsDrain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsOffline">resetIsOffline</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetIsBackup` <a name="resetIsBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsBackup"></a>

```java
public void resetIsBackup()
```

##### `resetIsDrain` <a name="resetIsDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsDrain"></a>

```java
public void resetIsDrain()
```

##### `resetIsOffline` <a name="resetIsOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsOffline"></a>

```java
public void resetIsOffline()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetTargetId"></a>

```java
public void resetTargetId()
```

##### `resetWeight` <a name="resetWeight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackupInput">isBackupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrainInput">isDrainInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOfflineInput">isOfflineInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackup">isBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrain">isDrain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOffline">isOffline</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `isBackupInput`<sup>Optional</sup> <a name="isBackupInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackupInput"></a>

```java
public java.lang.Object getIsBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDrainInput`<sup>Optional</sup> <a name="isDrainInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrainInput"></a>

```java
public java.lang.Object getIsDrainInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isOfflineInput`<sup>Optional</sup> <a name="isOfflineInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOfflineInput"></a>

```java
public java.lang.Object getIsOfflineInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `isBackup`<sup>Required</sup> <a name="isBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackup"></a>

```java
public java.lang.Object getIsBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDrain`<sup>Required</sup> <a name="isDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrain"></a>

```java
public java.lang.Object getIsDrain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isOffline`<sup>Required</sup> <a name="isOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOffline"></a>

```java
public java.lang.Object getIsOffline();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference;

new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryClass">resetQueryClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryType">resetQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetRcodes">resetRcodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetTransportProtocol">resetTransportProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryClass` <a name="resetQueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryClass"></a>

```java
public void resetQueryClass()
```

##### `resetQueryType` <a name="resetQueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryType"></a>

```java
public void resetQueryType()
```

##### `resetRcodes` <a name="resetRcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetRcodes"></a>

```java
public void resetRcodes()
```

##### `resetTransportProtocol` <a name="resetTransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetTransportProtocol"></a>

```java
public void resetTransportProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClassInput">queryClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryTypeInput">queryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodesInput">rcodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocolInput">transportProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClass">queryClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryType">queryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodes">rcodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocol">transportProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `queryClassInput`<sup>Optional</sup> <a name="queryClassInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClassInput"></a>

```java
public java.lang.String getQueryClassInput();
```

- *Type:* java.lang.String

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryTypeInput"></a>

```java
public java.lang.String getQueryTypeInput();
```

- *Type:* java.lang.String

---

##### `rcodesInput`<sup>Optional</sup> <a name="rcodesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodesInput"></a>

```java
public java.util.List<java.lang.String> getRcodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transportProtocolInput`<sup>Optional</sup> <a name="transportProtocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocolInput"></a>

```java
public java.lang.String getTransportProtocolInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `queryClass`<sup>Required</sup> <a name="queryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClass"></a>

```java
public java.lang.String getQueryClass();
```

- *Type:* java.lang.String

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

---

##### `rcodes`<sup>Required</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodes"></a>

```java
public java.util.List<java.lang.String> getRcodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```java
public java.lang.String getTransportProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.internalValue"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference;

new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns">putDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetIntervalInMillis">resetIntervalInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRequestData">resetRequestData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseBodyRegex">resetResponseBodyRegex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseData">resetResponseData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetReturnCode">resetReturnCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetTimeoutInMillis">resetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDns` <a name="putDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns"></a>

```java
public void putDns(NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---

##### `resetDns` <a name="resetDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetDns"></a>

```java
public void resetDns()
```

##### `resetIntervalInMillis` <a name="resetIntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetIntervalInMillis"></a>

```java
public void resetIntervalInMillis()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRequestData` <a name="resetRequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRequestData"></a>

```java
public void resetRequestData()
```

##### `resetResponseBodyRegex` <a name="resetResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```java
public void resetResponseBodyRegex()
```

##### `resetResponseData` <a name="resetResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseData"></a>

```java
public void resetResponseData()
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetReturnCode` <a name="resetReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetReturnCode"></a>

```java
public void resetReturnCode()
```

##### `resetTimeoutInMillis` <a name="resetTimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```java
public void resetTimeoutInMillis()
```

##### `resetUrlPath` <a name="resetUrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetUrlPath"></a>

```java
public void resetUrlPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dnsInput">dnsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillisInput">intervalInMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestDataInput">requestDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegexInput">responseBodyRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseDataInput">responseDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCodeInput">returnCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillisInput">timeoutInMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillis">intervalInMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestData">requestData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegex">responseBodyRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseData">responseData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCode">returnCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dns"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference getDns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference</a>

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dnsInput"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns getDnsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---

##### `intervalInMillisInput`<sup>Optional</sup> <a name="intervalInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillisInput"></a>

```java
public java.lang.Number getIntervalInMillisInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `requestDataInput`<sup>Optional</sup> <a name="requestDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestDataInput"></a>

```java
public java.lang.String getRequestDataInput();
```

- *Type:* java.lang.String

---

##### `responseBodyRegexInput`<sup>Optional</sup> <a name="responseBodyRegexInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```java
public java.lang.String getResponseBodyRegexInput();
```

- *Type:* java.lang.String

---

##### `responseDataInput`<sup>Optional</sup> <a name="responseDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseDataInput"></a>

```java
public java.lang.String getResponseDataInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `returnCodeInput`<sup>Optional</sup> <a name="returnCodeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCodeInput"></a>

```java
public java.lang.Number getReturnCodeInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInMillisInput`<sup>Optional</sup> <a name="timeoutInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```java
public java.lang.Number getTimeoutInMillisInput();
```

- *Type:* java.lang.Number

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPathInput"></a>

```java
public java.lang.String getUrlPathInput();
```

- *Type:* java.lang.String

---

##### `intervalInMillis`<sup>Required</sup> <a name="intervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillis"></a>

```java
public java.lang.Number getIntervalInMillis();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `requestData`<sup>Required</sup> <a name="requestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestData"></a>

```java
public java.lang.String getRequestData();
```

- *Type:* java.lang.String

---

##### `responseBodyRegex`<sup>Required</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegex"></a>

```java
public java.lang.String getResponseBodyRegex();
```

- *Type:* java.lang.String

---

##### `responseData`<sup>Required</sup> <a name="responseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseData"></a>

```java
public java.lang.String getResponseData();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `returnCode`<sup>Required</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCode"></a>

```java
public java.lang.Number getReturnCode();
```

- *Type:* java.lang.Number

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillis"></a>

```java
public java.lang.Number getTimeoutInMillis();
```

- *Type:* java.lang.Number

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.internalValue"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancers_backend_sets_unified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference;

new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

---



