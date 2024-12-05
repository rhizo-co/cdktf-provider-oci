# `coreVirtualCircuit` Submodule <a name="`coreVirtualCircuit` Submodule" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVirtualCircuit <a name="CoreVirtualCircuit" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit oci_core_virtual_circuit}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuit(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  type: str,
  bandwidth_shape_name: str = None,
  bgp_admin_state: str = None,
  cross_connect_mappings: typing.Union[IResolvable, typing.List[CoreVirtualCircuitCrossConnectMappings]] = None,
  customer_asn: str = None,
  customer_bgp_asn: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  gateway_id: str = None,
  id: str = None,
  ip_mtu: str = None,
  is_bfd_enabled: typing.Union[bool, IResolvable] = None,
  is_transport_mode: typing.Union[bool, IResolvable] = None,
  provider_service_id: str = None,
  provider_service_key_name: str = None,
  public_prefixes: typing.Union[IResolvable, typing.List[CoreVirtualCircuitPublicPrefixes]] = None,
  region: str = None,
  routing_policy: typing.List[str] = None,
  timeouts: CoreVirtualCircuitTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.bandwidthShapeName">bandwidth_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.bgpAdminState">bgp_admin_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.crossConnectMappings">cross_connect_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]]</code> | cross_connect_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.customerAsn">customer_asn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.customerBgpAsn">customer_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.ipMtu">ip_mtu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.isBfdEnabled">is_bfd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.isTransportMode">is_transport_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.providerServiceId">provider_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.providerServiceKeyName">provider_service_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.publicPrefixes">public_prefixes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]]</code> | public_prefixes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.routingPolicy">routing_policy</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}.

---

##### `bandwidth_shape_name`<sup>Optional</sup> <a name="bandwidth_shape_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.bandwidthShapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}.

---

##### `bgp_admin_state`<sup>Optional</sup> <a name="bgp_admin_state" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.bgpAdminState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}.

---

##### `cross_connect_mappings`<sup>Optional</sup> <a name="cross_connect_mappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.crossConnectMappings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]]

cross_connect_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_mappings CoreVirtualCircuit#cross_connect_mappings}

---

##### `customer_asn`<sup>Optional</sup> <a name="customer_asn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.customerAsn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}.

---

##### `customer_bgp_asn`<sup>Optional</sup> <a name="customer_bgp_asn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.customerBgpAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}.

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_mtu`<sup>Optional</sup> <a name="ip_mtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.ipMtu"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}.

---

##### `is_bfd_enabled`<sup>Optional</sup> <a name="is_bfd_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.isBfdEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}.

---

##### `is_transport_mode`<sup>Optional</sup> <a name="is_transport_mode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.isTransportMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}.

---

##### `provider_service_id`<sup>Optional</sup> <a name="provider_service_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.providerServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}.

---

##### `provider_service_key_name`<sup>Optional</sup> <a name="provider_service_key_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.providerServiceKeyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}.

---

##### `public_prefixes`<sup>Optional</sup> <a name="public_prefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.publicPrefixes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]]

public_prefixes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#public_prefixes CoreVirtualCircuit#public_prefixes}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}.

---

##### `routing_policy`<sup>Optional</sup> <a name="routing_policy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.routingPolicy"></a>

- *Type:* typing.List[str]

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
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings">put_cross_connect_mappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes">put_public_prefixes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBandwidthShapeName">reset_bandwidth_shape_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBgpAdminState">reset_bgp_admin_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCrossConnectMappings">reset_cross_connect_mappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerAsn">reset_customer_asn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerBgpAsn">reset_customer_bgp_asn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetGatewayId">reset_gateway_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIpMtu">reset_ip_mtu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsBfdEnabled">reset_is_bfd_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsTransportMode">reset_is_transport_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceId">reset_provider_service_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceKeyName">reset_provider_service_key_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetPublicPrefixes">reset_public_prefixes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRoutingPolicy">reset_routing_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cross_connect_mappings` <a name="put_cross_connect_mappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings"></a>

```python
def put_cross_connect_mappings(
  value: typing.Union[IResolvable, typing.List[CoreVirtualCircuitCrossConnectMappings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]]

---

##### `put_public_prefixes` <a name="put_public_prefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes"></a>

```python
def put_public_prefixes(
  value: typing.Union[IResolvable, typing.List[CoreVirtualCircuitPublicPrefixes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#create CoreVirtualCircuit#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#delete CoreVirtualCircuit#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#update CoreVirtualCircuit#update}.

---

##### `reset_bandwidth_shape_name` <a name="reset_bandwidth_shape_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBandwidthShapeName"></a>

```python
def reset_bandwidth_shape_name() -> None
```

##### `reset_bgp_admin_state` <a name="reset_bgp_admin_state" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBgpAdminState"></a>

```python
def reset_bgp_admin_state() -> None
```

##### `reset_cross_connect_mappings` <a name="reset_cross_connect_mappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCrossConnectMappings"></a>

```python
def reset_cross_connect_mappings() -> None
```

##### `reset_customer_asn` <a name="reset_customer_asn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerAsn"></a>

```python
def reset_customer_asn() -> None
```

##### `reset_customer_bgp_asn` <a name="reset_customer_bgp_asn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerBgpAsn"></a>

```python
def reset_customer_bgp_asn() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_gateway_id` <a name="reset_gateway_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetGatewayId"></a>

```python
def reset_gateway_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_mtu` <a name="reset_ip_mtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIpMtu"></a>

```python
def reset_ip_mtu() -> None
```

##### `reset_is_bfd_enabled` <a name="reset_is_bfd_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsBfdEnabled"></a>

```python
def reset_is_bfd_enabled() -> None
```

##### `reset_is_transport_mode` <a name="reset_is_transport_mode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsTransportMode"></a>

```python
def reset_is_transport_mode() -> None
```

##### `reset_provider_service_id` <a name="reset_provider_service_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceId"></a>

```python
def reset_provider_service_id() -> None
```

##### `reset_provider_service_key_name` <a name="reset_provider_service_key_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceKeyName"></a>

```python
def reset_provider_service_key_name() -> None
```

##### `reset_public_prefixes` <a name="reset_public_prefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetPublicPrefixes"></a>

```python
def reset_public_prefixes() -> None
```

##### `reset_region` <a name="reset_region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_routing_policy` <a name="reset_routing_policy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRoutingPolicy"></a>

```python
def reset_routing_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreVirtualCircuit resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuit.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreVirtualCircuit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreVirtualCircuit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreVirtualCircuit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVirtualCircuit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpIpv6SessionState">bgp_ipv6_session_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpManagement">bgp_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpSessionState">bgp_session_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappings">cross_connect_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList">CoreVirtualCircuitCrossConnectMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.oracleBgpAsn">oracle_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerState">provider_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixes">public_prefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList">CoreVirtualCircuitPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.referenceComment">reference_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference">CoreVirtualCircuitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.virtualCircuitRedundancyMetadata">virtual_circuit_redundancy_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList">CoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeNameInput">bandwidth_shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminStateInput">bgp_admin_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappingsInput">cross_connect_mappings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsnInput">customer_asn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsnInput">customer_bgp_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtuInput">ip_mtu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabledInput">is_bfd_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportModeInput">is_transport_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceIdInput">provider_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyNameInput">provider_service_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixesInput">public_prefixes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicyInput">routing_policy_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeName">bandwidth_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminState">bgp_admin_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsn">customer_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsn">customer_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtu">ip_mtu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabled">is_bfd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportMode">is_transport_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceId">provider_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyName">provider_service_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicy">routing_policy</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bgp_ipv6_session_state`<sup>Required</sup> <a name="bgp_ipv6_session_state" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpIpv6SessionState"></a>

```python
bgp_ipv6_session_state: str
```

- *Type:* str

---

##### `bgp_management`<sup>Required</sup> <a name="bgp_management" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpManagement"></a>

```python
bgp_management: str
```

- *Type:* str

---

##### `bgp_session_state`<sup>Required</sup> <a name="bgp_session_state" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpSessionState"></a>

```python
bgp_session_state: str
```

- *Type:* str

---

##### `cross_connect_mappings`<sup>Required</sup> <a name="cross_connect_mappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappings"></a>

```python
cross_connect_mappings: CoreVirtualCircuitCrossConnectMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList">CoreVirtualCircuitCrossConnectMappingsList</a>

---

##### `oracle_bgp_asn`<sup>Required</sup> <a name="oracle_bgp_asn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.oracleBgpAsn"></a>

```python
oracle_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_state`<sup>Required</sup> <a name="provider_state" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerState"></a>

```python
provider_state: str
```

- *Type:* str

---

##### `public_prefixes`<sup>Required</sup> <a name="public_prefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixes"></a>

```python
public_prefixes: CoreVirtualCircuitPublicPrefixesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList">CoreVirtualCircuitPublicPrefixesList</a>

---

##### `reference_comment`<sup>Required</sup> <a name="reference_comment" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.referenceComment"></a>

```python
reference_comment: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeouts"></a>

```python
timeouts: CoreVirtualCircuitTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference">CoreVirtualCircuitTimeoutsOutputReference</a>

---

##### `virtual_circuit_redundancy_metadata`<sup>Required</sup> <a name="virtual_circuit_redundancy_metadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.virtualCircuitRedundancyMetadata"></a>

```python
virtual_circuit_redundancy_metadata: CoreVirtualCircuitVirtualCircuitRedundancyMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList">CoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a>

---

##### `bandwidth_shape_name_input`<sup>Optional</sup> <a name="bandwidth_shape_name_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeNameInput"></a>

```python
bandwidth_shape_name_input: str
```

- *Type:* str

---

##### `bgp_admin_state_input`<sup>Optional</sup> <a name="bgp_admin_state_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminStateInput"></a>

```python
bgp_admin_state_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `cross_connect_mappings_input`<sup>Optional</sup> <a name="cross_connect_mappings_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappingsInput"></a>

```python
cross_connect_mappings_input: typing.Union[IResolvable, typing.List[CoreVirtualCircuitCrossConnectMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]]

---

##### `customer_asn_input`<sup>Optional</sup> <a name="customer_asn_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsnInput"></a>

```python
customer_asn_input: str
```

- *Type:* str

---

##### `customer_bgp_asn_input`<sup>Optional</sup> <a name="customer_bgp_asn_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsnInput"></a>

```python
customer_bgp_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_mtu_input`<sup>Optional</sup> <a name="ip_mtu_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtuInput"></a>

```python
ip_mtu_input: str
```

- *Type:* str

---

##### `is_bfd_enabled_input`<sup>Optional</sup> <a name="is_bfd_enabled_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabledInput"></a>

```python
is_bfd_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_transport_mode_input`<sup>Optional</sup> <a name="is_transport_mode_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportModeInput"></a>

```python
is_transport_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provider_service_id_input`<sup>Optional</sup> <a name="provider_service_id_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceIdInput"></a>

```python
provider_service_id_input: str
```

- *Type:* str

---

##### `provider_service_key_name_input`<sup>Optional</sup> <a name="provider_service_key_name_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyNameInput"></a>

```python
provider_service_key_name_input: str
```

- *Type:* str

---

##### `public_prefixes_input`<sup>Optional</sup> <a name="public_prefixes_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixesInput"></a>

```python
public_prefixes_input: typing.Union[IResolvable, typing.List[CoreVirtualCircuitPublicPrefixes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `routing_policy_input`<sup>Optional</sup> <a name="routing_policy_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicyInput"></a>

```python
routing_policy_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreVirtualCircuitTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `bandwidth_shape_name`<sup>Required</sup> <a name="bandwidth_shape_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeName"></a>

```python
bandwidth_shape_name: str
```

- *Type:* str

---

##### `bgp_admin_state`<sup>Required</sup> <a name="bgp_admin_state" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminState"></a>

```python
bgp_admin_state: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `customer_asn`<sup>Required</sup> <a name="customer_asn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsn"></a>

```python
customer_asn: str
```

- *Type:* str

---

##### `customer_bgp_asn`<sup>Required</sup> <a name="customer_bgp_asn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsn"></a>

```python
customer_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_mtu`<sup>Required</sup> <a name="ip_mtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtu"></a>

```python
ip_mtu: str
```

- *Type:* str

---

##### `is_bfd_enabled`<sup>Required</sup> <a name="is_bfd_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabled"></a>

```python
is_bfd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_transport_mode`<sup>Required</sup> <a name="is_transport_mode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportMode"></a>

```python
is_transport_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provider_service_id`<sup>Required</sup> <a name="provider_service_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceId"></a>

```python
provider_service_id: str
```

- *Type:* str

---

##### `provider_service_key_name`<sup>Required</sup> <a name="provider_service_key_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyName"></a>

```python
provider_service_key_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicy"></a>

```python
routing_policy: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVirtualCircuitConfig <a name="CoreVirtualCircuitConfig" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  type: str,
  bandwidth_shape_name: str = None,
  bgp_admin_state: str = None,
  cross_connect_mappings: typing.Union[IResolvable, typing.List[CoreVirtualCircuitCrossConnectMappings]] = None,
  customer_asn: str = None,
  customer_bgp_asn: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  gateway_id: str = None,
  id: str = None,
  ip_mtu: str = None,
  is_bfd_enabled: typing.Union[bool, IResolvable] = None,
  is_transport_mode: typing.Union[bool, IResolvable] = None,
  provider_service_id: str = None,
  provider_service_key_name: str = None,
  public_prefixes: typing.Union[IResolvable, typing.List[CoreVirtualCircuitPublicPrefixes]] = None,
  region: str = None,
  routing_policy: typing.List[str] = None,
  timeouts: CoreVirtualCircuitTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bandwidthShapeName">bandwidth_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bgpAdminState">bgp_admin_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.crossConnectMappings">cross_connect_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]]</code> | cross_connect_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerAsn">customer_asn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerBgpAsn">customer_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.ipMtu">ip_mtu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isBfdEnabled">is_bfd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isTransportMode">is_transport_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceId">provider_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceKeyName">provider_service_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.publicPrefixes">public_prefixes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]]</code> | public_prefixes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.routingPolicy">routing_policy</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}.

---

##### `bandwidth_shape_name`<sup>Optional</sup> <a name="bandwidth_shape_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bandwidthShapeName"></a>

```python
bandwidth_shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}.

---

##### `bgp_admin_state`<sup>Optional</sup> <a name="bgp_admin_state" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bgpAdminState"></a>

```python
bgp_admin_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}.

---

##### `cross_connect_mappings`<sup>Optional</sup> <a name="cross_connect_mappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.crossConnectMappings"></a>

```python
cross_connect_mappings: typing.Union[IResolvable, typing.List[CoreVirtualCircuitCrossConnectMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]]

cross_connect_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_mappings CoreVirtualCircuit#cross_connect_mappings}

---

##### `customer_asn`<sup>Optional</sup> <a name="customer_asn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerAsn"></a>

```python
customer_asn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}.

---

##### `customer_bgp_asn`<sup>Optional</sup> <a name="customer_bgp_asn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerBgpAsn"></a>

```python
customer_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}.

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_mtu`<sup>Optional</sup> <a name="ip_mtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.ipMtu"></a>

```python
ip_mtu: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}.

---

##### `is_bfd_enabled`<sup>Optional</sup> <a name="is_bfd_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isBfdEnabled"></a>

```python
is_bfd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}.

---

##### `is_transport_mode`<sup>Optional</sup> <a name="is_transport_mode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isTransportMode"></a>

```python
is_transport_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}.

---

##### `provider_service_id`<sup>Optional</sup> <a name="provider_service_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceId"></a>

```python
provider_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}.

---

##### `provider_service_key_name`<sup>Optional</sup> <a name="provider_service_key_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceKeyName"></a>

```python
provider_service_key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}.

---

##### `public_prefixes`<sup>Optional</sup> <a name="public_prefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.publicPrefixes"></a>

```python
public_prefixes: typing.Union[IResolvable, typing.List[CoreVirtualCircuitPublicPrefixes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]]

public_prefixes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#public_prefixes CoreVirtualCircuit#public_prefixes}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}.

---

##### `routing_policy`<sup>Optional</sup> <a name="routing_policy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.routingPolicy"></a>

```python
routing_policy: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.timeouts"></a>

```python
timeouts: CoreVirtualCircuitTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#timeouts CoreVirtualCircuit#timeouts}

---

### CoreVirtualCircuitCrossConnectMappings <a name="CoreVirtualCircuitCrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings(
  bgp_md5_auth_key: str = None,
  cross_connect_or_cross_connect_group_id: str = None,
  customer_bgp_peering_ip: str = None,
  customer_bgp_peering_ipv6: str = None,
  oracle_bgp_peering_ip: str = None,
  oracle_bgp_peering_ipv6: str = None,
  vlan: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.bgpMd5AuthKey">bgp_md5_auth_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_md5auth_key CoreVirtualCircuit#bgp_md5auth_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.crossConnectOrCrossConnectGroupId">cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_or_cross_connect_group_id CoreVirtualCircuit#cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIp">customer_bgp_peering_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ip CoreVirtualCircuit#customer_bgp_peering_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIpv6">customer_bgp_peering_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ipv6 CoreVirtualCircuit#customer_bgp_peering_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIp">oracle_bgp_peering_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ip CoreVirtualCircuit#oracle_bgp_peering_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIpv6">oracle_bgp_peering_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ipv6 CoreVirtualCircuit#oracle_bgp_peering_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#vlan CoreVirtualCircuit#vlan}. |

---

##### `bgp_md5_auth_key`<sup>Optional</sup> <a name="bgp_md5_auth_key" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.bgpMd5AuthKey"></a>

```python
bgp_md5_auth_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_md5auth_key CoreVirtualCircuit#bgp_md5auth_key}.

---

##### `cross_connect_or_cross_connect_group_id`<sup>Optional</sup> <a name="cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.crossConnectOrCrossConnectGroupId"></a>

```python
cross_connect_or_cross_connect_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_or_cross_connect_group_id CoreVirtualCircuit#cross_connect_or_cross_connect_group_id}.

---

##### `customer_bgp_peering_ip`<sup>Optional</sup> <a name="customer_bgp_peering_ip" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIp"></a>

```python
customer_bgp_peering_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ip CoreVirtualCircuit#customer_bgp_peering_ip}.

---

##### `customer_bgp_peering_ipv6`<sup>Optional</sup> <a name="customer_bgp_peering_ipv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIpv6"></a>

```python
customer_bgp_peering_ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ipv6 CoreVirtualCircuit#customer_bgp_peering_ipv6}.

---

##### `oracle_bgp_peering_ip`<sup>Optional</sup> <a name="oracle_bgp_peering_ip" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIp"></a>

```python
oracle_bgp_peering_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ip CoreVirtualCircuit#oracle_bgp_peering_ip}.

---

##### `oracle_bgp_peering_ipv6`<sup>Optional</sup> <a name="oracle_bgp_peering_ipv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIpv6"></a>

```python
oracle_bgp_peering_ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ipv6 CoreVirtualCircuit#oracle_bgp_peering_ipv6}.

---

##### `vlan`<sup>Optional</sup> <a name="vlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#vlan CoreVirtualCircuit#vlan}.

---

### CoreVirtualCircuitPublicPrefixes <a name="CoreVirtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes(
  cidr_block: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cidr_block CoreVirtualCircuit#cidr_block}. |

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cidr_block CoreVirtualCircuit#cidr_block}.

---

### CoreVirtualCircuitTimeouts <a name="CoreVirtualCircuitTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#create CoreVirtualCircuit#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#delete CoreVirtualCircuit#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#update CoreVirtualCircuit#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#create CoreVirtualCircuit#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#delete CoreVirtualCircuit#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#update CoreVirtualCircuit#update}.

---

### CoreVirtualCircuitVirtualCircuitRedundancyMetadata <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### CoreVirtualCircuitCrossConnectMappingsList <a name="CoreVirtualCircuitCrossConnectMappingsList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreVirtualCircuitCrossConnectMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreVirtualCircuitCrossConnectMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]]

---


### CoreVirtualCircuitCrossConnectMappingsOutputReference <a name="CoreVirtualCircuitCrossConnectMappingsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetBgpMd5AuthKey">reset_bgp_md5_auth_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCrossConnectOrCrossConnectGroupId">reset_cross_connect_or_cross_connect_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIp">reset_customer_bgp_peering_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIpv6">reset_customer_bgp_peering_ipv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIp">reset_oracle_bgp_peering_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIpv6">reset_oracle_bgp_peering_ipv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetVlan">reset_vlan</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bgp_md5_auth_key` <a name="reset_bgp_md5_auth_key" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetBgpMd5AuthKey"></a>

```python
def reset_bgp_md5_auth_key() -> None
```

##### `reset_cross_connect_or_cross_connect_group_id` <a name="reset_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCrossConnectOrCrossConnectGroupId"></a>

```python
def reset_cross_connect_or_cross_connect_group_id() -> None
```

##### `reset_customer_bgp_peering_ip` <a name="reset_customer_bgp_peering_ip" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIp"></a>

```python
def reset_customer_bgp_peering_ip() -> None
```

##### `reset_customer_bgp_peering_ipv6` <a name="reset_customer_bgp_peering_ipv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIpv6"></a>

```python
def reset_customer_bgp_peering_ipv6() -> None
```

##### `reset_oracle_bgp_peering_ip` <a name="reset_oracle_bgp_peering_ip" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIp"></a>

```python
def reset_oracle_bgp_peering_ip() -> None
```

##### `reset_oracle_bgp_peering_ipv6` <a name="reset_oracle_bgp_peering_ipv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIpv6"></a>

```python
def reset_oracle_bgp_peering_ipv6() -> None
```

##### `reset_vlan` <a name="reset_vlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetVlan"></a>

```python
def reset_vlan() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKeyInput">bgp_md5_auth_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupIdInput">cross_connect_or_cross_connect_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpInput">customer_bgp_peering_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6Input">customer_bgp_peering_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpInput">oracle_bgp_peering_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6Input">oracle_bgp_peering_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey">bgp_md5_auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId">cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp">customer_bgp_peering_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6">customer_bgp_peering_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp">oracle_bgp_peering_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6">oracle_bgp_peering_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_md5_auth_key_input`<sup>Optional</sup> <a name="bgp_md5_auth_key_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKeyInput"></a>

```python
bgp_md5_auth_key_input: str
```

- *Type:* str

---

##### `cross_connect_or_cross_connect_group_id_input`<sup>Optional</sup> <a name="cross_connect_or_cross_connect_group_id_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupIdInput"></a>

```python
cross_connect_or_cross_connect_group_id_input: str
```

- *Type:* str

---

##### `customer_bgp_peering_ip_input`<sup>Optional</sup> <a name="customer_bgp_peering_ip_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpInput"></a>

```python
customer_bgp_peering_ip_input: str
```

- *Type:* str

---

##### `customer_bgp_peering_ipv6_input`<sup>Optional</sup> <a name="customer_bgp_peering_ipv6_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6Input"></a>

```python
customer_bgp_peering_ipv6_input: str
```

- *Type:* str

---

##### `oracle_bgp_peering_ip_input`<sup>Optional</sup> <a name="oracle_bgp_peering_ip_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpInput"></a>

```python
oracle_bgp_peering_ip_input: str
```

- *Type:* str

---

##### `oracle_bgp_peering_ipv6_input`<sup>Optional</sup> <a name="oracle_bgp_peering_ipv6_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6Input"></a>

```python
oracle_bgp_peering_ipv6_input: str
```

- *Type:* str

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_md5_auth_key`<sup>Required</sup> <a name="bgp_md5_auth_key" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey"></a>

```python
bgp_md5_auth_key: str
```

- *Type:* str

---

##### `cross_connect_or_cross_connect_group_id`<sup>Required</sup> <a name="cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId"></a>

```python
cross_connect_or_cross_connect_group_id: str
```

- *Type:* str

---

##### `customer_bgp_peering_ip`<sup>Required</sup> <a name="customer_bgp_peering_ip" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp"></a>

```python
customer_bgp_peering_ip: str
```

- *Type:* str

---

##### `customer_bgp_peering_ipv6`<sup>Required</sup> <a name="customer_bgp_peering_ipv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6"></a>

```python
customer_bgp_peering_ipv6: str
```

- *Type:* str

---

##### `oracle_bgp_peering_ip`<sup>Required</sup> <a name="oracle_bgp_peering_ip" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp"></a>

```python
oracle_bgp_peering_ip: str
```

- *Type:* str

---

##### `oracle_bgp_peering_ipv6`<sup>Required</sup> <a name="oracle_bgp_peering_ipv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6"></a>

```python
oracle_bgp_peering_ipv6: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVirtualCircuitCrossConnectMappings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>]

---


### CoreVirtualCircuitPublicPrefixesList <a name="CoreVirtualCircuitPublicPrefixesList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreVirtualCircuitPublicPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreVirtualCircuitPublicPrefixes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]]

---


### CoreVirtualCircuitPublicPrefixesOutputReference <a name="CoreVirtualCircuitPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVirtualCircuitPublicPrefixes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>]

---


### CoreVirtualCircuitTimeoutsOutputReference <a name="CoreVirtualCircuitTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVirtualCircuitTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>]

---


### CoreVirtualCircuitVirtualCircuitRedundancyMetadataList <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadataList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_circuit

coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel">configured_redundancy_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus">ipv4_bgp_session_redundancy_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus">ipv6_bgp_session_redundancy_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata">CoreVirtualCircuitVirtualCircuitRedundancyMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configured_redundancy_level`<sup>Required</sup> <a name="configured_redundancy_level" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel"></a>

```python
configured_redundancy_level: str
```

- *Type:* str

---

##### `ipv4_bgp_session_redundancy_status`<sup>Required</sup> <a name="ipv4_bgp_session_redundancy_status" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus"></a>

```python
ipv4_bgp_session_redundancy_status: str
```

- *Type:* str

---

##### `ipv6_bgp_session_redundancy_status`<sup>Required</sup> <a name="ipv6_bgp_session_redundancy_status" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus"></a>

```python
ipv6_bgp_session_redundancy_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue"></a>

```python
internal_value: CoreVirtualCircuitVirtualCircuitRedundancyMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata">CoreVirtualCircuitVirtualCircuitRedundancyMetadata</a>

---



