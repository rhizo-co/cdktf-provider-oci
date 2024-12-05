# `coreVirtualCircuit` Submodule <a name="`coreVirtualCircuit` Submodule" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVirtualCircuit <a name="CoreVirtualCircuit" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit oci_core_virtual_circuit}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuit;

CoreVirtualCircuit.Builder.create(Construct scope, java.lang.String id)
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
    .type(java.lang.String)
//  .bandwidthShapeName(java.lang.String)
//  .bgpAdminState(java.lang.String)
//  .crossConnectMappings(IResolvable)
//  .crossConnectMappings(java.util.List<CoreVirtualCircuitCrossConnectMappings>)
//  .customerAsn(java.lang.String)
//  .customerBgpAsn(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .gatewayId(java.lang.String)
//  .id(java.lang.String)
//  .ipMtu(java.lang.String)
//  .isBfdEnabled(java.lang.Boolean)
//  .isBfdEnabled(IResolvable)
//  .isTransportMode(java.lang.Boolean)
//  .isTransportMode(IResolvable)
//  .providerServiceId(java.lang.String)
//  .providerServiceKeyName(java.lang.String)
//  .publicPrefixes(IResolvable)
//  .publicPrefixes(java.util.List<CoreVirtualCircuitPublicPrefixes>)
//  .region(java.lang.String)
//  .routingPolicy(java.util.List<java.lang.String>)
//  .timeouts(CoreVirtualCircuitTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.bandwidthShapeName">bandwidthShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.bgpAdminState">bgpAdminState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.crossConnectMappings">crossConnectMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>></code> | cross_connect_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.customerAsn">customerAsn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.customerBgpAsn">customerBgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.ipMtu">ipMtu</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.isBfdEnabled">isBfdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.isTransportMode">isTransportMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.providerServiceId">providerServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.providerServiceKeyName">providerServiceKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.publicPrefixes">publicPrefixes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>></code> | public_prefixes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.routingPolicy">routingPolicy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}.

---

##### `bandwidthShapeName`<sup>Optional</sup> <a name="bandwidthShapeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.bandwidthShapeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}.

---

##### `bgpAdminState`<sup>Optional</sup> <a name="bgpAdminState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.bgpAdminState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}.

---

##### `crossConnectMappings`<sup>Optional</sup> <a name="crossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.crossConnectMappings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>>

cross_connect_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_mappings CoreVirtualCircuit#cross_connect_mappings}

---

##### `customerAsn`<sup>Optional</sup> <a name="customerAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.customerAsn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}.

---

##### `customerBgpAsn`<sup>Optional</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.customerBgpAsn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}.

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.gatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipMtu`<sup>Optional</sup> <a name="ipMtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.ipMtu"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}.

---

##### `isBfdEnabled`<sup>Optional</sup> <a name="isBfdEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.isBfdEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}.

---

##### `isTransportMode`<sup>Optional</sup> <a name="isTransportMode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.isTransportMode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}.

---

##### `providerServiceId`<sup>Optional</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.providerServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}.

---

##### `providerServiceKeyName`<sup>Optional</sup> <a name="providerServiceKeyName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.providerServiceKeyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}.

---

##### `publicPrefixes`<sup>Optional</sup> <a name="publicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.publicPrefixes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>>

public_prefixes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#public_prefixes CoreVirtualCircuit#public_prefixes}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}.

---

##### `routingPolicy`<sup>Optional</sup> <a name="routingPolicy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.routingPolicy"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#timeouts CoreVirtualCircuit#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings">putCrossConnectMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes">putPublicPrefixes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBandwidthShapeName">resetBandwidthShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBgpAdminState">resetBgpAdminState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCrossConnectMappings">resetCrossConnectMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerAsn">resetCustomerAsn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerBgpAsn">resetCustomerBgpAsn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetGatewayId">resetGatewayId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIpMtu">resetIpMtu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsBfdEnabled">resetIsBfdEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsTransportMode">resetIsTransportMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceId">resetProviderServiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceKeyName">resetProviderServiceKeyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetPublicPrefixes">resetPublicPrefixes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRoutingPolicy">resetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCrossConnectMappings` <a name="putCrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings"></a>

```java
public void putCrossConnectMappings(IResolvable OR java.util.List<CoreVirtualCircuitCrossConnectMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>>

---

##### `putPublicPrefixes` <a name="putPublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes"></a>

```java
public void putPublicPrefixes(IResolvable OR java.util.List<CoreVirtualCircuitPublicPrefixes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts"></a>

```java
public void putTimeouts(CoreVirtualCircuitTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

---

##### `resetBandwidthShapeName` <a name="resetBandwidthShapeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBandwidthShapeName"></a>

```java
public void resetBandwidthShapeName()
```

##### `resetBgpAdminState` <a name="resetBgpAdminState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBgpAdminState"></a>

```java
public void resetBgpAdminState()
```

##### `resetCrossConnectMappings` <a name="resetCrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCrossConnectMappings"></a>

```java
public void resetCrossConnectMappings()
```

##### `resetCustomerAsn` <a name="resetCustomerAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerAsn"></a>

```java
public void resetCustomerAsn()
```

##### `resetCustomerBgpAsn` <a name="resetCustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerBgpAsn"></a>

```java
public void resetCustomerBgpAsn()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetGatewayId` <a name="resetGatewayId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetGatewayId"></a>

```java
public void resetGatewayId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetId"></a>

```java
public void resetId()
```

##### `resetIpMtu` <a name="resetIpMtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIpMtu"></a>

```java
public void resetIpMtu()
```

##### `resetIsBfdEnabled` <a name="resetIsBfdEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsBfdEnabled"></a>

```java
public void resetIsBfdEnabled()
```

##### `resetIsTransportMode` <a name="resetIsTransportMode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsTransportMode"></a>

```java
public void resetIsTransportMode()
```

##### `resetProviderServiceId` <a name="resetProviderServiceId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceId"></a>

```java
public void resetProviderServiceId()
```

##### `resetProviderServiceKeyName` <a name="resetProviderServiceKeyName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceKeyName"></a>

```java
public void resetProviderServiceKeyName()
```

##### `resetPublicPrefixes` <a name="resetPublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetPublicPrefixes"></a>

```java
public void resetPublicPrefixes()
```

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoutingPolicy` <a name="resetRoutingPolicy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRoutingPolicy"></a>

```java
public void resetRoutingPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVirtualCircuit resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuit;

CoreVirtualCircuit.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuit;

CoreVirtualCircuit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuit;

CoreVirtualCircuit.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuit;

CoreVirtualCircuit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreVirtualCircuit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreVirtualCircuit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreVirtualCircuit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreVirtualCircuit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreVirtualCircuit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpIpv6SessionState">bgpIpv6SessionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpManagement">bgpManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpSessionState">bgpSessionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappings">crossConnectMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList">CoreVirtualCircuitCrossConnectMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.oracleBgpAsn">oracleBgpAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerState">providerState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixes">publicPrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList">CoreVirtualCircuitPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.referenceComment">referenceComment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference">CoreVirtualCircuitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.virtualCircuitRedundancyMetadata">virtualCircuitRedundancyMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList">CoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeNameInput">bandwidthShapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminStateInput">bgpAdminStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappingsInput">crossConnectMappingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsnInput">customerAsnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsnInput">customerBgpAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtuInput">ipMtuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabledInput">isBfdEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportModeInput">isTransportModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceIdInput">providerServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyNameInput">providerServiceKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixesInput">publicPrefixesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicyInput">routingPolicyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeName">bandwidthShapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminState">bgpAdminState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsn">customerAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsn">customerBgpAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtu">ipMtu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabled">isBfdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportMode">isTransportMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceId">providerServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyName">providerServiceKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicy">routingPolicy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bgpIpv6SessionState`<sup>Required</sup> <a name="bgpIpv6SessionState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpIpv6SessionState"></a>

```java
public java.lang.String getBgpIpv6SessionState();
```

- *Type:* java.lang.String

---

##### `bgpManagement`<sup>Required</sup> <a name="bgpManagement" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpManagement"></a>

```java
public java.lang.String getBgpManagement();
```

- *Type:* java.lang.String

---

##### `bgpSessionState`<sup>Required</sup> <a name="bgpSessionState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpSessionState"></a>

```java
public java.lang.String getBgpSessionState();
```

- *Type:* java.lang.String

---

##### `crossConnectMappings`<sup>Required</sup> <a name="crossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappings"></a>

```java
public CoreVirtualCircuitCrossConnectMappingsList getCrossConnectMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList">CoreVirtualCircuitCrossConnectMappingsList</a>

---

##### `oracleBgpAsn`<sup>Required</sup> <a name="oracleBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.oracleBgpAsn"></a>

```java
public java.lang.Number getOracleBgpAsn();
```

- *Type:* java.lang.Number

---

##### `providerState`<sup>Required</sup> <a name="providerState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerState"></a>

```java
public java.lang.String getProviderState();
```

- *Type:* java.lang.String

---

##### `publicPrefixes`<sup>Required</sup> <a name="publicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixes"></a>

```java
public CoreVirtualCircuitPublicPrefixesList getPublicPrefixes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList">CoreVirtualCircuitPublicPrefixesList</a>

---

##### `referenceComment`<sup>Required</sup> <a name="referenceComment" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.referenceComment"></a>

```java
public java.lang.String getReferenceComment();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeouts"></a>

```java
public CoreVirtualCircuitTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference">CoreVirtualCircuitTimeoutsOutputReference</a>

---

##### `virtualCircuitRedundancyMetadata`<sup>Required</sup> <a name="virtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.virtualCircuitRedundancyMetadata"></a>

```java
public CoreVirtualCircuitVirtualCircuitRedundancyMetadataList getVirtualCircuitRedundancyMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList">CoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a>

---

##### `bandwidthShapeNameInput`<sup>Optional</sup> <a name="bandwidthShapeNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeNameInput"></a>

```java
public java.lang.String getBandwidthShapeNameInput();
```

- *Type:* java.lang.String

---

##### `bgpAdminStateInput`<sup>Optional</sup> <a name="bgpAdminStateInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminStateInput"></a>

```java
public java.lang.String getBgpAdminStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `crossConnectMappingsInput`<sup>Optional</sup> <a name="crossConnectMappingsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappingsInput"></a>

```java
public java.lang.Object getCrossConnectMappingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>>

---

##### `customerAsnInput`<sup>Optional</sup> <a name="customerAsnInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsnInput"></a>

```java
public java.lang.String getCustomerAsnInput();
```

- *Type:* java.lang.String

---

##### `customerBgpAsnInput`<sup>Optional</sup> <a name="customerBgpAsnInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsnInput"></a>

```java
public java.lang.Number getCustomerBgpAsnInput();
```

- *Type:* java.lang.Number

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipMtuInput`<sup>Optional</sup> <a name="ipMtuInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtuInput"></a>

```java
public java.lang.String getIpMtuInput();
```

- *Type:* java.lang.String

---

##### `isBfdEnabledInput`<sup>Optional</sup> <a name="isBfdEnabledInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabledInput"></a>

```java
public java.lang.Object getIsBfdEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isTransportModeInput`<sup>Optional</sup> <a name="isTransportModeInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportModeInput"></a>

```java
public java.lang.Object getIsTransportModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `providerServiceIdInput`<sup>Optional</sup> <a name="providerServiceIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceIdInput"></a>

```java
public java.lang.String getProviderServiceIdInput();
```

- *Type:* java.lang.String

---

##### `providerServiceKeyNameInput`<sup>Optional</sup> <a name="providerServiceKeyNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyNameInput"></a>

```java
public java.lang.String getProviderServiceKeyNameInput();
```

- *Type:* java.lang.String

---

##### `publicPrefixesInput`<sup>Optional</sup> <a name="publicPrefixesInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixesInput"></a>

```java
public java.lang.Object getPublicPrefixesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routingPolicyInput`<sup>Optional</sup> <a name="routingPolicyInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicyInput"></a>

```java
public java.util.List<java.lang.String> getRoutingPolicyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `bandwidthShapeName`<sup>Required</sup> <a name="bandwidthShapeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeName"></a>

```java
public java.lang.String getBandwidthShapeName();
```

- *Type:* java.lang.String

---

##### `bgpAdminState`<sup>Required</sup> <a name="bgpAdminState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminState"></a>

```java
public java.lang.String getBgpAdminState();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsn"></a>

```java
public java.lang.String getCustomerAsn();
```

- *Type:* java.lang.String

---

##### `customerBgpAsn`<sup>Required</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsn"></a>

```java
public java.lang.Number getCustomerBgpAsn();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipMtu`<sup>Required</sup> <a name="ipMtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtu"></a>

```java
public java.lang.String getIpMtu();
```

- *Type:* java.lang.String

---

##### `isBfdEnabled`<sup>Required</sup> <a name="isBfdEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabled"></a>

```java
public java.lang.Object getIsBfdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isTransportMode`<sup>Required</sup> <a name="isTransportMode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportMode"></a>

```java
public java.lang.Object getIsTransportMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `providerServiceId`<sup>Required</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceId"></a>

```java
public java.lang.String getProviderServiceId();
```

- *Type:* java.lang.String

---

##### `providerServiceKeyName`<sup>Required</sup> <a name="providerServiceKeyName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyName"></a>

```java
public java.lang.String getProviderServiceKeyName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `routingPolicy`<sup>Required</sup> <a name="routingPolicy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicy"></a>

```java
public java.util.List<java.lang.String> getRoutingPolicy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVirtualCircuitConfig <a name="CoreVirtualCircuitConfig" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitConfig;

CoreVirtualCircuitConfig.builder()
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
    .type(java.lang.String)
//  .bandwidthShapeName(java.lang.String)
//  .bgpAdminState(java.lang.String)
//  .crossConnectMappings(IResolvable)
//  .crossConnectMappings(java.util.List<CoreVirtualCircuitCrossConnectMappings>)
//  .customerAsn(java.lang.String)
//  .customerBgpAsn(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .gatewayId(java.lang.String)
//  .id(java.lang.String)
//  .ipMtu(java.lang.String)
//  .isBfdEnabled(java.lang.Boolean)
//  .isBfdEnabled(IResolvable)
//  .isTransportMode(java.lang.Boolean)
//  .isTransportMode(IResolvable)
//  .providerServiceId(java.lang.String)
//  .providerServiceKeyName(java.lang.String)
//  .publicPrefixes(IResolvable)
//  .publicPrefixes(java.util.List<CoreVirtualCircuitPublicPrefixes>)
//  .region(java.lang.String)
//  .routingPolicy(java.util.List<java.lang.String>)
//  .timeouts(CoreVirtualCircuitTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bandwidthShapeName">bandwidthShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bgpAdminState">bgpAdminState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.crossConnectMappings">crossConnectMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>></code> | cross_connect_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerAsn">customerAsn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerBgpAsn">customerBgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.ipMtu">ipMtu</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isBfdEnabled">isBfdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isTransportMode">isTransportMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceId">providerServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceKeyName">providerServiceKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.publicPrefixes">publicPrefixes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>></code> | public_prefixes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.routingPolicy">routingPolicy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}.

---

##### `bandwidthShapeName`<sup>Optional</sup> <a name="bandwidthShapeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bandwidthShapeName"></a>

```java
public java.lang.String getBandwidthShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}.

---

##### `bgpAdminState`<sup>Optional</sup> <a name="bgpAdminState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bgpAdminState"></a>

```java
public java.lang.String getBgpAdminState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}.

---

##### `crossConnectMappings`<sup>Optional</sup> <a name="crossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.crossConnectMappings"></a>

```java
public java.lang.Object getCrossConnectMappings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>>

cross_connect_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_mappings CoreVirtualCircuit#cross_connect_mappings}

---

##### `customerAsn`<sup>Optional</sup> <a name="customerAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerAsn"></a>

```java
public java.lang.String getCustomerAsn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}.

---

##### `customerBgpAsn`<sup>Optional</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerBgpAsn"></a>

```java
public java.lang.Number getCustomerBgpAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}.

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipMtu`<sup>Optional</sup> <a name="ipMtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.ipMtu"></a>

```java
public java.lang.String getIpMtu();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}.

---

##### `isBfdEnabled`<sup>Optional</sup> <a name="isBfdEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isBfdEnabled"></a>

```java
public java.lang.Object getIsBfdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}.

---

##### `isTransportMode`<sup>Optional</sup> <a name="isTransportMode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isTransportMode"></a>

```java
public java.lang.Object getIsTransportMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}.

---

##### `providerServiceId`<sup>Optional</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceId"></a>

```java
public java.lang.String getProviderServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}.

---

##### `providerServiceKeyName`<sup>Optional</sup> <a name="providerServiceKeyName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceKeyName"></a>

```java
public java.lang.String getProviderServiceKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}.

---

##### `publicPrefixes`<sup>Optional</sup> <a name="publicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.publicPrefixes"></a>

```java
public java.lang.Object getPublicPrefixes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>>

public_prefixes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#public_prefixes CoreVirtualCircuit#public_prefixes}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}.

---

##### `routingPolicy`<sup>Optional</sup> <a name="routingPolicy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.routingPolicy"></a>

```java
public java.util.List<java.lang.String> getRoutingPolicy();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.timeouts"></a>

```java
public CoreVirtualCircuitTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#timeouts CoreVirtualCircuit#timeouts}

---

### CoreVirtualCircuitCrossConnectMappings <a name="CoreVirtualCircuitCrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitCrossConnectMappings;

CoreVirtualCircuitCrossConnectMappings.builder()
//  .bgpMd5AuthKey(java.lang.String)
//  .crossConnectOrCrossConnectGroupId(java.lang.String)
//  .customerBgpPeeringIp(java.lang.String)
//  .customerBgpPeeringIpv6(java.lang.String)
//  .oracleBgpPeeringIp(java.lang.String)
//  .oracleBgpPeeringIpv6(java.lang.String)
//  .vlan(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.bgpMd5AuthKey">bgpMd5AuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_md5auth_key CoreVirtualCircuit#bgp_md5auth_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.crossConnectOrCrossConnectGroupId">crossConnectOrCrossConnectGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_or_cross_connect_group_id CoreVirtualCircuit#cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIp">customerBgpPeeringIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ip CoreVirtualCircuit#customer_bgp_peering_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIpv6">customerBgpPeeringIpv6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ipv6 CoreVirtualCircuit#customer_bgp_peering_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIp">oracleBgpPeeringIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ip CoreVirtualCircuit#oracle_bgp_peering_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIpv6">oracleBgpPeeringIpv6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ipv6 CoreVirtualCircuit#oracle_bgp_peering_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#vlan CoreVirtualCircuit#vlan}. |

---

##### `bgpMd5AuthKey`<sup>Optional</sup> <a name="bgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.bgpMd5AuthKey"></a>

```java
public java.lang.String getBgpMd5AuthKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_md5auth_key CoreVirtualCircuit#bgp_md5auth_key}.

---

##### `crossConnectOrCrossConnectGroupId`<sup>Optional</sup> <a name="crossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.crossConnectOrCrossConnectGroupId"></a>

```java
public java.lang.String getCrossConnectOrCrossConnectGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_or_cross_connect_group_id CoreVirtualCircuit#cross_connect_or_cross_connect_group_id}.

---

##### `customerBgpPeeringIp`<sup>Optional</sup> <a name="customerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIp"></a>

```java
public java.lang.String getCustomerBgpPeeringIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ip CoreVirtualCircuit#customer_bgp_peering_ip}.

---

##### `customerBgpPeeringIpv6`<sup>Optional</sup> <a name="customerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIpv6"></a>

```java
public java.lang.String getCustomerBgpPeeringIpv6();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ipv6 CoreVirtualCircuit#customer_bgp_peering_ipv6}.

---

##### `oracleBgpPeeringIp`<sup>Optional</sup> <a name="oracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIp"></a>

```java
public java.lang.String getOracleBgpPeeringIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ip CoreVirtualCircuit#oracle_bgp_peering_ip}.

---

##### `oracleBgpPeeringIpv6`<sup>Optional</sup> <a name="oracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIpv6"></a>

```java
public java.lang.String getOracleBgpPeeringIpv6();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ipv6 CoreVirtualCircuit#oracle_bgp_peering_ipv6}.

---

##### `vlan`<sup>Optional</sup> <a name="vlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#vlan CoreVirtualCircuit#vlan}.

---

### CoreVirtualCircuitPublicPrefixes <a name="CoreVirtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitPublicPrefixes;

CoreVirtualCircuitPublicPrefixes.builder()
    .cidrBlock(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cidr_block CoreVirtualCircuit#cidr_block}. |

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cidr_block CoreVirtualCircuit#cidr_block}.

---

### CoreVirtualCircuitTimeouts <a name="CoreVirtualCircuitTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitTimeouts;

CoreVirtualCircuitTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#create CoreVirtualCircuit#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#delete CoreVirtualCircuit#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#update CoreVirtualCircuit#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#create CoreVirtualCircuit#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#delete CoreVirtualCircuit#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#update CoreVirtualCircuit#update}.

---

### CoreVirtualCircuitVirtualCircuitRedundancyMetadata <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata;

CoreVirtualCircuitVirtualCircuitRedundancyMetadata.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### CoreVirtualCircuitCrossConnectMappingsList <a name="CoreVirtualCircuitCrossConnectMappingsList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitCrossConnectMappingsList;

new CoreVirtualCircuitCrossConnectMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get"></a>

```java
public CoreVirtualCircuitCrossConnectMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>>

---


### CoreVirtualCircuitCrossConnectMappingsOutputReference <a name="CoreVirtualCircuitCrossConnectMappingsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitCrossConnectMappingsOutputReference;

new CoreVirtualCircuitCrossConnectMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetBgpMd5AuthKey">resetBgpMd5AuthKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCrossConnectOrCrossConnectGroupId">resetCrossConnectOrCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIp">resetCustomerBgpPeeringIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIpv6">resetCustomerBgpPeeringIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIp">resetOracleBgpPeeringIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIpv6">resetOracleBgpPeeringIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetVlan">resetVlan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBgpMd5AuthKey` <a name="resetBgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetBgpMd5AuthKey"></a>

```java
public void resetBgpMd5AuthKey()
```

##### `resetCrossConnectOrCrossConnectGroupId` <a name="resetCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCrossConnectOrCrossConnectGroupId"></a>

```java
public void resetCrossConnectOrCrossConnectGroupId()
```

##### `resetCustomerBgpPeeringIp` <a name="resetCustomerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIp"></a>

```java
public void resetCustomerBgpPeeringIp()
```

##### `resetCustomerBgpPeeringIpv6` <a name="resetCustomerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIpv6"></a>

```java
public void resetCustomerBgpPeeringIpv6()
```

##### `resetOracleBgpPeeringIp` <a name="resetOracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIp"></a>

```java
public void resetOracleBgpPeeringIp()
```

##### `resetOracleBgpPeeringIpv6` <a name="resetOracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIpv6"></a>

```java
public void resetOracleBgpPeeringIpv6()
```

##### `resetVlan` <a name="resetVlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetVlan"></a>

```java
public void resetVlan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKeyInput">bgpMd5AuthKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupIdInput">crossConnectOrCrossConnectGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpInput">customerBgpPeeringIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6Input">customerBgpPeeringIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpInput">oracleBgpPeeringIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6Input">oracleBgpPeeringIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey">bgpMd5AuthKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId">crossConnectOrCrossConnectGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp">customerBgpPeeringIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6">customerBgpPeeringIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp">oracleBgpPeeringIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6">oracleBgpPeeringIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bgpMd5AuthKeyInput`<sup>Optional</sup> <a name="bgpMd5AuthKeyInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKeyInput"></a>

```java
public java.lang.String getBgpMd5AuthKeyInput();
```

- *Type:* java.lang.String

---

##### `crossConnectOrCrossConnectGroupIdInput`<sup>Optional</sup> <a name="crossConnectOrCrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupIdInput"></a>

```java
public java.lang.String getCrossConnectOrCrossConnectGroupIdInput();
```

- *Type:* java.lang.String

---

##### `customerBgpPeeringIpInput`<sup>Optional</sup> <a name="customerBgpPeeringIpInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpInput"></a>

```java
public java.lang.String getCustomerBgpPeeringIpInput();
```

- *Type:* java.lang.String

---

##### `customerBgpPeeringIpv6Input`<sup>Optional</sup> <a name="customerBgpPeeringIpv6Input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6Input"></a>

```java
public java.lang.String getCustomerBgpPeeringIpv6Input();
```

- *Type:* java.lang.String

---

##### `oracleBgpPeeringIpInput`<sup>Optional</sup> <a name="oracleBgpPeeringIpInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpInput"></a>

```java
public java.lang.String getOracleBgpPeeringIpInput();
```

- *Type:* java.lang.String

---

##### `oracleBgpPeeringIpv6Input`<sup>Optional</sup> <a name="oracleBgpPeeringIpv6Input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6Input"></a>

```java
public java.lang.String getOracleBgpPeeringIpv6Input();
```

- *Type:* java.lang.String

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `bgpMd5AuthKey`<sup>Required</sup> <a name="bgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey"></a>

```java
public java.lang.String getBgpMd5AuthKey();
```

- *Type:* java.lang.String

---

##### `crossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="crossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId"></a>

```java
public java.lang.String getCrossConnectOrCrossConnectGroupId();
```

- *Type:* java.lang.String

---

##### `customerBgpPeeringIp`<sup>Required</sup> <a name="customerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp"></a>

```java
public java.lang.String getCustomerBgpPeeringIp();
```

- *Type:* java.lang.String

---

##### `customerBgpPeeringIpv6`<sup>Required</sup> <a name="customerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6"></a>

```java
public java.lang.String getCustomerBgpPeeringIpv6();
```

- *Type:* java.lang.String

---

##### `oracleBgpPeeringIp`<sup>Required</sup> <a name="oracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp"></a>

```java
public java.lang.String getOracleBgpPeeringIp();
```

- *Type:* java.lang.String

---

##### `oracleBgpPeeringIpv6`<sup>Required</sup> <a name="oracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6"></a>

```java
public java.lang.String getOracleBgpPeeringIpv6();
```

- *Type:* java.lang.String

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>

---


### CoreVirtualCircuitPublicPrefixesList <a name="CoreVirtualCircuitPublicPrefixesList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitPublicPrefixesList;

new CoreVirtualCircuitPublicPrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get"></a>

```java
public CoreVirtualCircuitPublicPrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>>

---


### CoreVirtualCircuitPublicPrefixesOutputReference <a name="CoreVirtualCircuitPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitPublicPrefixesOutputReference;

new CoreVirtualCircuitPublicPrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>

---


### CoreVirtualCircuitTimeoutsOutputReference <a name="CoreVirtualCircuitTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitTimeoutsOutputReference;

new CoreVirtualCircuitTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

---


### CoreVirtualCircuitVirtualCircuitRedundancyMetadataList <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadataList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList;

new CoreVirtualCircuitVirtualCircuitRedundancyMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get"></a>

```java
public CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_virtual_circuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference;

new CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel">configuredRedundancyLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus">ipv4BgpSessionRedundancyStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus">ipv6BgpSessionRedundancyStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata">CoreVirtualCircuitVirtualCircuitRedundancyMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configuredRedundancyLevel`<sup>Required</sup> <a name="configuredRedundancyLevel" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel"></a>

```java
public java.lang.String getConfiguredRedundancyLevel();
```

- *Type:* java.lang.String

---

##### `ipv4BgpSessionRedundancyStatus`<sup>Required</sup> <a name="ipv4BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus"></a>

```java
public java.lang.String getIpv4BgpSessionRedundancyStatus();
```

- *Type:* java.lang.String

---

##### `ipv6BgpSessionRedundancyStatus`<sup>Required</sup> <a name="ipv6BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus"></a>

```java
public java.lang.String getIpv6BgpSessionRedundancyStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue"></a>

```java
public CoreVirtualCircuitVirtualCircuitRedundancyMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata">CoreVirtualCircuitVirtualCircuitRedundancyMetadata</a>

---



