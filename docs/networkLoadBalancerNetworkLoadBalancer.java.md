# `networkLoadBalancerNetworkLoadBalancer` Submodule <a name="`networkLoadBalancerNetworkLoadBalancer` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerNetworkLoadBalancer <a name="NetworkLoadBalancerNetworkLoadBalancer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer oci_network_load_balancer_network_load_balancer}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancer;

NetworkLoadBalancerNetworkLoadBalancer.Builder.create(Construct scope, java.lang.String id)
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
    .subnetId(java.lang.String)
//  .assignedIpv6(java.lang.String)
//  .assignedPrivateIpv4(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isPreserveSourceDestination(java.lang.Boolean)
//  .isPreserveSourceDestination(IResolvable)
//  .isPrivate(java.lang.Boolean)
//  .isPrivate(IResolvable)
//  .isSymmetricHashEnabled(java.lang.Boolean)
//  .isSymmetricHashEnabled(IResolvable)
//  .networkSecurityGroupIds(java.util.List<java.lang.String>)
//  .nlbIpVersion(java.lang.String)
//  .reservedIps(IResolvable)
//  .reservedIps(java.util.List<NetworkLoadBalancerNetworkLoadBalancerReservedIps>)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .subnetIpv6Cidr(java.lang.String)
//  .timeouts(NetworkLoadBalancerNetworkLoadBalancerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#compartment_id NetworkLoadBalancerNetworkLoadBalancer#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#display_name NetworkLoadBalancerNetworkLoadBalancer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_id NetworkLoadBalancerNetworkLoadBalancer#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.assignedIpv6">assignedIpv6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_ipv6 NetworkLoadBalancerNetworkLoadBalancer#assigned_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.assignedPrivateIpv4">assignedPrivateIpv4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_private_ipv4 NetworkLoadBalancerNetworkLoadBalancer#assigned_private_ipv4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#defined_tags NetworkLoadBalancerNetworkLoadBalancer#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#freeform_tags NetworkLoadBalancerNetworkLoadBalancer#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#id NetworkLoadBalancerNetworkLoadBalancer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.isPreserveSourceDestination">isPreserveSourceDestination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_preserve_source_destination NetworkLoadBalancerNetworkLoadBalancer#is_preserve_source_destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_private NetworkLoadBalancerNetworkLoadBalancer#is_private}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.isSymmetricHashEnabled">isSymmetricHashEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_symmetric_hash_enabled NetworkLoadBalancerNetworkLoadBalancer#is_symmetric_hash_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#network_security_group_ids NetworkLoadBalancerNetworkLoadBalancer#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.nlbIpVersion">nlbIpVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#nlb_ip_version NetworkLoadBalancerNetworkLoadBalancer#nlb_ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.reservedIps">reservedIps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>></code> | reserved_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#security_attributes NetworkLoadBalancerNetworkLoadBalancer#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.subnetIpv6Cidr">subnetIpv6Cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_ipv6cidr NetworkLoadBalancerNetworkLoadBalancer#subnet_ipv6cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#compartment_id NetworkLoadBalancerNetworkLoadBalancer#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#display_name NetworkLoadBalancerNetworkLoadBalancer#display_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_id NetworkLoadBalancerNetworkLoadBalancer#subnet_id}.

---

##### `assignedIpv6`<sup>Optional</sup> <a name="assignedIpv6" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.assignedIpv6"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_ipv6 NetworkLoadBalancerNetworkLoadBalancer#assigned_ipv6}.

---

##### `assignedPrivateIpv4`<sup>Optional</sup> <a name="assignedPrivateIpv4" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.assignedPrivateIpv4"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_private_ipv4 NetworkLoadBalancerNetworkLoadBalancer#assigned_private_ipv4}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#defined_tags NetworkLoadBalancerNetworkLoadBalancer#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#freeform_tags NetworkLoadBalancerNetworkLoadBalancer#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#id NetworkLoadBalancerNetworkLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPreserveSourceDestination`<sup>Optional</sup> <a name="isPreserveSourceDestination" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.isPreserveSourceDestination"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_preserve_source_destination NetworkLoadBalancerNetworkLoadBalancer#is_preserve_source_destination}.

---

##### `isPrivate`<sup>Optional</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.isPrivate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_private NetworkLoadBalancerNetworkLoadBalancer#is_private}.

---

##### `isSymmetricHashEnabled`<sup>Optional</sup> <a name="isSymmetricHashEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.isSymmetricHashEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_symmetric_hash_enabled NetworkLoadBalancerNetworkLoadBalancer#is_symmetric_hash_enabled}.

---

##### `networkSecurityGroupIds`<sup>Optional</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.networkSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#network_security_group_ids NetworkLoadBalancerNetworkLoadBalancer#network_security_group_ids}.

---

##### `nlbIpVersion`<sup>Optional</sup> <a name="nlbIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.nlbIpVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#nlb_ip_version NetworkLoadBalancerNetworkLoadBalancer#nlb_ip_version}.

---

##### `reservedIps`<sup>Optional</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.reservedIps"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>>

reserved_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#reserved_ips NetworkLoadBalancerNetworkLoadBalancer#reserved_ips}

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.securityAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#security_attributes NetworkLoadBalancerNetworkLoadBalancer#security_attributes}.

---

##### `subnetIpv6Cidr`<sup>Optional</sup> <a name="subnetIpv6Cidr" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.subnetIpv6Cidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_ipv6cidr NetworkLoadBalancerNetworkLoadBalancer#subnet_ipv6cidr}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#timeouts NetworkLoadBalancerNetworkLoadBalancer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putReservedIps">putReservedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetAssignedIpv6">resetAssignedIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetAssignedPrivateIpv4">resetAssignedPrivateIpv4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsPreserveSourceDestination">resetIsPreserveSourceDestination</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsPrivate">resetIsPrivate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsSymmetricHashEnabled">resetIsSymmetricHashEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetNetworkSecurityGroupIds">resetNetworkSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetNlbIpVersion">resetNlbIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetReservedIps">resetReservedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetSubnetIpv6Cidr">resetSubnetIpv6Cidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReservedIps` <a name="putReservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putReservedIps"></a>

```java
public void putReservedIps(IResolvable OR java.util.List<NetworkLoadBalancerNetworkLoadBalancerReservedIps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putReservedIps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putTimeouts"></a>

```java
public void putTimeouts(NetworkLoadBalancerNetworkLoadBalancerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a>

---

##### `resetAssignedIpv6` <a name="resetAssignedIpv6" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetAssignedIpv6"></a>

```java
public void resetAssignedIpv6()
```

##### `resetAssignedPrivateIpv4` <a name="resetAssignedPrivateIpv4" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetAssignedPrivateIpv4"></a>

```java
public void resetAssignedPrivateIpv4()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetId"></a>

```java
public void resetId()
```

##### `resetIsPreserveSourceDestination` <a name="resetIsPreserveSourceDestination" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsPreserveSourceDestination"></a>

```java
public void resetIsPreserveSourceDestination()
```

##### `resetIsPrivate` <a name="resetIsPrivate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsPrivate"></a>

```java
public void resetIsPrivate()
```

##### `resetIsSymmetricHashEnabled` <a name="resetIsSymmetricHashEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsSymmetricHashEnabled"></a>

```java
public void resetIsSymmetricHashEnabled()
```

##### `resetNetworkSecurityGroupIds` <a name="resetNetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetNetworkSecurityGroupIds"></a>

```java
public void resetNetworkSecurityGroupIds()
```

##### `resetNlbIpVersion` <a name="resetNlbIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetNlbIpVersion"></a>

```java
public void resetNlbIpVersion()
```

##### `resetReservedIps` <a name="resetReservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetReservedIps"></a>

```java
public void resetReservedIps()
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetSecurityAttributes"></a>

```java
public void resetSecurityAttributes()
```

##### `resetSubnetIpv6Cidr` <a name="resetSubnetIpv6Cidr" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetSubnetIpv6Cidr"></a>

```java
public void resetSubnetIpv6Cidr()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancer;

NetworkLoadBalancerNetworkLoadBalancer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancer;

NetworkLoadBalancerNetworkLoadBalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancer;

NetworkLoadBalancerNetworkLoadBalancer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancer;

NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkLoadBalancerNetworkLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkLoadBalancerNetworkLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerNetworkLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.ipAddresses">ipAddresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList">NetworkLoadBalancerNetworkLoadBalancerIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.reservedIps">reservedIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList">NetworkLoadBalancerNetworkLoadBalancerReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedIpv6Input">assignedIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedPrivateIpv4Input">assignedPrivateIpv4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPreserveSourceDestinationInput">isPreserveSourceDestinationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPrivateInput">isPrivateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isSymmetricHashEnabledInput">isSymmetricHashEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.networkSecurityGroupIdsInput">networkSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.nlbIpVersionInput">nlbIpVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.reservedIpsInput">reservedIpsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.securityAttributesInput">securityAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIpv6CidrInput">subnetIpv6CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedIpv6">assignedIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedPrivateIpv4">assignedPrivateIpv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPreserveSourceDestination">isPreserveSourceDestination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isSymmetricHashEnabled">isSymmetricHashEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.nlbIpVersion">nlbIpVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIpv6Cidr">subnetIpv6Cidr</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.ipAddresses"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancerIpAddressesList getIpAddresses();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList">NetworkLoadBalancerNetworkLoadBalancerIpAddressesList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `reservedIps`<sup>Required</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.reservedIps"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancerReservedIpsList getReservedIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList">NetworkLoadBalancerNetworkLoadBalancerReservedIpsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeouts"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `assignedIpv6Input`<sup>Optional</sup> <a name="assignedIpv6Input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedIpv6Input"></a>

```java
public java.lang.String getAssignedIpv6Input();
```

- *Type:* java.lang.String

---

##### `assignedPrivateIpv4Input`<sup>Optional</sup> <a name="assignedPrivateIpv4Input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedPrivateIpv4Input"></a>

```java
public java.lang.String getAssignedPrivateIpv4Input();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isPreserveSourceDestinationInput`<sup>Optional</sup> <a name="isPreserveSourceDestinationInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPreserveSourceDestinationInput"></a>

```java
public java.lang.Object getIsPreserveSourceDestinationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrivateInput`<sup>Optional</sup> <a name="isPrivateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPrivateInput"></a>

```java
public java.lang.Object getIsPrivateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSymmetricHashEnabledInput`<sup>Optional</sup> <a name="isSymmetricHashEnabledInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isSymmetricHashEnabledInput"></a>

```java
public java.lang.Object getIsSymmetricHashEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkSecurityGroupIdsInput`<sup>Optional</sup> <a name="networkSecurityGroupIdsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.networkSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nlbIpVersionInput`<sup>Optional</sup> <a name="nlbIpVersionInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.nlbIpVersionInput"></a>

```java
public java.lang.String getNlbIpVersionInput();
```

- *Type:* java.lang.String

---

##### `reservedIpsInput`<sup>Optional</sup> <a name="reservedIpsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.reservedIpsInput"></a>

```java
public java.lang.Object getReservedIpsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>>

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.securityAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIpv6CidrInput`<sup>Optional</sup> <a name="subnetIpv6CidrInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIpv6CidrInput"></a>

```java
public java.lang.String getSubnetIpv6CidrInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a>

---

##### `assignedIpv6`<sup>Required</sup> <a name="assignedIpv6" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedIpv6"></a>

```java
public java.lang.String getAssignedIpv6();
```

- *Type:* java.lang.String

---

##### `assignedPrivateIpv4`<sup>Required</sup> <a name="assignedPrivateIpv4" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedPrivateIpv4"></a>

```java
public java.lang.String getAssignedPrivateIpv4();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPreserveSourceDestination`<sup>Required</sup> <a name="isPreserveSourceDestination" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPreserveSourceDestination"></a>

```java
public java.lang.Object getIsPreserveSourceDestination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPrivate"></a>

```java
public java.lang.Object getIsPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSymmetricHashEnabled`<sup>Required</sup> <a name="isSymmetricHashEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isSymmetricHashEnabled"></a>

```java
public java.lang.Object getIsSymmetricHashEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.networkSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nlbIpVersion`<sup>Required</sup> <a name="nlbIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.nlbIpVersion"></a>

```java
public java.lang.String getNlbIpVersion();
```

- *Type:* java.lang.String

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `subnetIpv6Cidr`<sup>Required</sup> <a name="subnetIpv6Cidr" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIpv6Cidr"></a>

```java
public java.lang.String getSubnetIpv6Cidr();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerNetworkLoadBalancerConfig <a name="NetworkLoadBalancerNetworkLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerConfig;

NetworkLoadBalancerNetworkLoadBalancerConfig.builder()
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
    .subnetId(java.lang.String)
//  .assignedIpv6(java.lang.String)
//  .assignedPrivateIpv4(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isPreserveSourceDestination(java.lang.Boolean)
//  .isPreserveSourceDestination(IResolvable)
//  .isPrivate(java.lang.Boolean)
//  .isPrivate(IResolvable)
//  .isSymmetricHashEnabled(java.lang.Boolean)
//  .isSymmetricHashEnabled(IResolvable)
//  .networkSecurityGroupIds(java.util.List<java.lang.String>)
//  .nlbIpVersion(java.lang.String)
//  .reservedIps(IResolvable)
//  .reservedIps(java.util.List<NetworkLoadBalancerNetworkLoadBalancerReservedIps>)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .subnetIpv6Cidr(java.lang.String)
//  .timeouts(NetworkLoadBalancerNetworkLoadBalancerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#compartment_id NetworkLoadBalancerNetworkLoadBalancer#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#display_name NetworkLoadBalancerNetworkLoadBalancer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_id NetworkLoadBalancerNetworkLoadBalancer#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.assignedIpv6">assignedIpv6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_ipv6 NetworkLoadBalancerNetworkLoadBalancer#assigned_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.assignedPrivateIpv4">assignedPrivateIpv4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_private_ipv4 NetworkLoadBalancerNetworkLoadBalancer#assigned_private_ipv4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#defined_tags NetworkLoadBalancerNetworkLoadBalancer#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#freeform_tags NetworkLoadBalancerNetworkLoadBalancer#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#id NetworkLoadBalancerNetworkLoadBalancer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isPreserveSourceDestination">isPreserveSourceDestination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_preserve_source_destination NetworkLoadBalancerNetworkLoadBalancer#is_preserve_source_destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_private NetworkLoadBalancerNetworkLoadBalancer#is_private}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isSymmetricHashEnabled">isSymmetricHashEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_symmetric_hash_enabled NetworkLoadBalancerNetworkLoadBalancer#is_symmetric_hash_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#network_security_group_ids NetworkLoadBalancerNetworkLoadBalancer#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.nlbIpVersion">nlbIpVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#nlb_ip_version NetworkLoadBalancerNetworkLoadBalancer#nlb_ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.reservedIps">reservedIps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>></code> | reserved_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#security_attributes NetworkLoadBalancerNetworkLoadBalancer#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.subnetIpv6Cidr">subnetIpv6Cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_ipv6cidr NetworkLoadBalancerNetworkLoadBalancer#subnet_ipv6cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#compartment_id NetworkLoadBalancerNetworkLoadBalancer#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#display_name NetworkLoadBalancerNetworkLoadBalancer#display_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_id NetworkLoadBalancerNetworkLoadBalancer#subnet_id}.

---

##### `assignedIpv6`<sup>Optional</sup> <a name="assignedIpv6" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.assignedIpv6"></a>

```java
public java.lang.String getAssignedIpv6();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_ipv6 NetworkLoadBalancerNetworkLoadBalancer#assigned_ipv6}.

---

##### `assignedPrivateIpv4`<sup>Optional</sup> <a name="assignedPrivateIpv4" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.assignedPrivateIpv4"></a>

```java
public java.lang.String getAssignedPrivateIpv4();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_private_ipv4 NetworkLoadBalancerNetworkLoadBalancer#assigned_private_ipv4}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#defined_tags NetworkLoadBalancerNetworkLoadBalancer#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#freeform_tags NetworkLoadBalancerNetworkLoadBalancer#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#id NetworkLoadBalancerNetworkLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPreserveSourceDestination`<sup>Optional</sup> <a name="isPreserveSourceDestination" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isPreserveSourceDestination"></a>

```java
public java.lang.Object getIsPreserveSourceDestination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_preserve_source_destination NetworkLoadBalancerNetworkLoadBalancer#is_preserve_source_destination}.

---

##### `isPrivate`<sup>Optional</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isPrivate"></a>

```java
public java.lang.Object getIsPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_private NetworkLoadBalancerNetworkLoadBalancer#is_private}.

---

##### `isSymmetricHashEnabled`<sup>Optional</sup> <a name="isSymmetricHashEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isSymmetricHashEnabled"></a>

```java
public java.lang.Object getIsSymmetricHashEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_symmetric_hash_enabled NetworkLoadBalancerNetworkLoadBalancer#is_symmetric_hash_enabled}.

---

##### `networkSecurityGroupIds`<sup>Optional</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.networkSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#network_security_group_ids NetworkLoadBalancerNetworkLoadBalancer#network_security_group_ids}.

---

##### `nlbIpVersion`<sup>Optional</sup> <a name="nlbIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.nlbIpVersion"></a>

```java
public java.lang.String getNlbIpVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#nlb_ip_version NetworkLoadBalancerNetworkLoadBalancer#nlb_ip_version}.

---

##### `reservedIps`<sup>Optional</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.reservedIps"></a>

```java
public java.lang.Object getReservedIps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>>

reserved_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#reserved_ips NetworkLoadBalancerNetworkLoadBalancer#reserved_ips}

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#security_attributes NetworkLoadBalancerNetworkLoadBalancer#security_attributes}.

---

##### `subnetIpv6Cidr`<sup>Optional</sup> <a name="subnetIpv6Cidr" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.subnetIpv6Cidr"></a>

```java
public java.lang.String getSubnetIpv6Cidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_ipv6cidr NetworkLoadBalancerNetworkLoadBalancer#subnet_ipv6cidr}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.timeouts"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancerTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#timeouts NetworkLoadBalancerNetworkLoadBalancer#timeouts}

---

### NetworkLoadBalancerNetworkLoadBalancerIpAddresses <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddresses" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddresses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerIpAddresses;

NetworkLoadBalancerNetworkLoadBalancerIpAddresses.builder()
    .build();
```


### NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp;

NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp.builder()
    .build();
```


### NetworkLoadBalancerNetworkLoadBalancerReservedIps <a name="NetworkLoadBalancerNetworkLoadBalancerReservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps;

NetworkLoadBalancerNetworkLoadBalancerReservedIps.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#id NetworkLoadBalancerNetworkLoadBalancer#id}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#id NetworkLoadBalancerNetworkLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NetworkLoadBalancerNetworkLoadBalancerTimeouts <a name="NetworkLoadBalancerNetworkLoadBalancerTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts;

NetworkLoadBalancerNetworkLoadBalancerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#create NetworkLoadBalancerNetworkLoadBalancer#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#delete NetworkLoadBalancerNetworkLoadBalancer#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#update NetworkLoadBalancerNetworkLoadBalancer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#create NetworkLoadBalancerNetworkLoadBalancer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#delete NetworkLoadBalancerNetworkLoadBalancer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#update NetworkLoadBalancerNetworkLoadBalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerNetworkLoadBalancerIpAddressesList <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddressesList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList;

new NetworkLoadBalancerNetworkLoadBalancerIpAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.get"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference;

new NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.isPublic">isPublic</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.reservedIp">reservedIp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList">NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddresses">NetworkLoadBalancerNetworkLoadBalancerIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.isPublic"></a>

```java
public IResolvable getIsPublic();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `reservedIp`<sup>Required</sup> <a name="reservedIp" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.reservedIp"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList getReservedIp();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList">NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.internalValue"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancerIpAddresses getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddresses">NetworkLoadBalancerNetworkLoadBalancerIpAddresses</a>

---


### NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList;

new NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.get"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference;

new NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp">NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.internalValue"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp">NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp</a>

---


### NetworkLoadBalancerNetworkLoadBalancerReservedIpsList <a name="NetworkLoadBalancerNetworkLoadBalancerReservedIpsList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList;

new NetworkLoadBalancerNetworkLoadBalancerReservedIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.get"></a>

```java
public NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>>

---


### NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference;

new NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>

---


### NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.network_load_balancer_network_load_balancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference;

new NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a>

---



