# `loadBalancerLoadBalancer` Submodule <a name="`loadBalancerLoadBalancer` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerLoadBalancer <a name="LoadBalancerLoadBalancer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer oci_load_balancer_load_balancer}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancer(
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
  display_name: str,
  shape: str,
  subnet_ids: typing.List[str],
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ip_mode: str = None,
  is_delete_protection_enabled: typing.Union[bool, IResolvable] = None,
  is_private: typing.Union[bool, IResolvable] = None,
  is_request_id_enabled: typing.Union[bool, IResolvable] = None,
  network_security_group_ids: typing.List[str] = None,
  request_id_header: str = None,
  reserved_ips: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerReservedIps]] = None,
  shape_details: LoadBalancerLoadBalancerShapeDetails = None,
  timeouts: LoadBalancerLoadBalancerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.ipMode">ip_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isDeleteProtectionEnabled">is_delete_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isPrivate">is_private</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isRequestIdEnabled">is_request_id_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.requestIdHeader">request_id_header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.reservedIps">reserved_ips</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]]</code> | reserved_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.shapeDetails">shape_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | shape_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_mode`<sup>Optional</sup> <a name="ip_mode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.ipMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}.

---

##### `is_delete_protection_enabled`<sup>Optional</sup> <a name="is_delete_protection_enabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isDeleteProtectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}.

---

##### `is_private`<sup>Optional</sup> <a name="is_private" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isPrivate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}.

---

##### `is_request_id_enabled`<sup>Optional</sup> <a name="is_request_id_enabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isRequestIdEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}.

---

##### `network_security_group_ids`<sup>Optional</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.networkSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}.

---

##### `request_id_header`<sup>Optional</sup> <a name="request_id_header" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.requestIdHeader"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}.

---

##### `reserved_ips`<sup>Optional</sup> <a name="reserved_ips" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.reservedIps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]]

reserved_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#reserved_ips LoadBalancerLoadBalancer#reserved_ips}

---

##### `shape_details`<sup>Optional</sup> <a name="shape_details" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.shapeDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

shape_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape_details LoadBalancerLoadBalancer#shape_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#timeouts LoadBalancerLoadBalancer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putReservedIps">put_reserved_ips</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putShapeDetails">put_shape_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIpMode">reset_ip_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsDeleteProtectionEnabled">reset_is_delete_protection_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsPrivate">reset_is_private</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsRequestIdEnabled">reset_is_request_id_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetNetworkSecurityGroupIds">reset_network_security_group_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetRequestIdHeader">reset_request_id_header</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetReservedIps">reset_reserved_ips</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetShapeDetails">reset_shape_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_reserved_ips` <a name="put_reserved_ips" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putReservedIps"></a>

```python
def put_reserved_ips(
  value: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerReservedIps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putReservedIps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]]

---

##### `put_shape_details` <a name="put_shape_details" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putShapeDetails"></a>

```python
def put_shape_details(
  maximum_bandwidth_in_mbps: typing.Union[int, float],
  minimum_bandwidth_in_mbps: typing.Union[int, float]
) -> None
```

###### `maximum_bandwidth_in_mbps`<sup>Required</sup> <a name="maximum_bandwidth_in_mbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putShapeDetails.parameter.maximumBandwidthInMbps"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#maximum_bandwidth_in_mbps LoadBalancerLoadBalancer#maximum_bandwidth_in_mbps}.

---

###### `minimum_bandwidth_in_mbps`<sup>Required</sup> <a name="minimum_bandwidth_in_mbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putShapeDetails.parameter.minimumBandwidthInMbps"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#minimum_bandwidth_in_mbps LoadBalancerLoadBalancer#minimum_bandwidth_in_mbps}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#create LoadBalancerLoadBalancer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#delete LoadBalancerLoadBalancer#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#update LoadBalancerLoadBalancer#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_mode` <a name="reset_ip_mode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIpMode"></a>

```python
def reset_ip_mode() -> None
```

##### `reset_is_delete_protection_enabled` <a name="reset_is_delete_protection_enabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsDeleteProtectionEnabled"></a>

```python
def reset_is_delete_protection_enabled() -> None
```

##### `reset_is_private` <a name="reset_is_private" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsPrivate"></a>

```python
def reset_is_private() -> None
```

##### `reset_is_request_id_enabled` <a name="reset_is_request_id_enabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsRequestIdEnabled"></a>

```python
def reset_is_request_id_enabled() -> None
```

##### `reset_network_security_group_ids` <a name="reset_network_security_group_ids" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetNetworkSecurityGroupIds"></a>

```python
def reset_network_security_group_ids() -> None
```

##### `reset_request_id_header` <a name="reset_request_id_header" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetRequestIdHeader"></a>

```python
def reset_request_id_header() -> None
```

##### `reset_reserved_ips` <a name="reset_reserved_ips" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetReservedIps"></a>

```python
def reset_reserved_ips() -> None
```

##### `reset_shape_details` <a name="reset_shape_details" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetShapeDetails"></a>

```python
def reset_shape_details() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadBalancerLoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadBalancerLoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadBalancerLoadBalancer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadBalancerLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddressDetails">ip_address_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList">LoadBalancerLoadBalancerIpAddressDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIps">reserved_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList">LoadBalancerLoadBalancerReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetails">shape_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference">LoadBalancerLoadBalancerShapeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference">LoadBalancerLoadBalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipModeInput">ip_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabledInput">is_delete_protection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivateInput">is_private_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabledInput">is_request_id_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIdsInput">network_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeaderInput">request_id_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIpsInput">reserved_ips_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetailsInput">shape_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipMode">ip_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabled">is_delete_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivate">is_private</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabled">is_request_id_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeader">request_id_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_address_details`<sup>Required</sup> <a name="ip_address_details" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddressDetails"></a>

```python
ip_address_details: LoadBalancerLoadBalancerIpAddressDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList">LoadBalancerLoadBalancerIpAddressDetailsList</a>

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reserved_ips`<sup>Required</sup> <a name="reserved_ips" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIps"></a>

```python
reserved_ips: LoadBalancerLoadBalancerReservedIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList">LoadBalancerLoadBalancerReservedIpsList</a>

---

##### `shape_details`<sup>Required</sup> <a name="shape_details" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetails"></a>

```python
shape_details: LoadBalancerLoadBalancerShapeDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference">LoadBalancerLoadBalancerShapeDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeouts"></a>

```python
timeouts: LoadBalancerLoadBalancerTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference">LoadBalancerLoadBalancerTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_mode_input`<sup>Optional</sup> <a name="ip_mode_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipModeInput"></a>

```python
ip_mode_input: str
```

- *Type:* str

---

##### `is_delete_protection_enabled_input`<sup>Optional</sup> <a name="is_delete_protection_enabled_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabledInput"></a>

```python
is_delete_protection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_private_input`<sup>Optional</sup> <a name="is_private_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivateInput"></a>

```python
is_private_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_request_id_enabled_input`<sup>Optional</sup> <a name="is_request_id_enabled_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabledInput"></a>

```python
is_request_id_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_security_group_ids_input`<sup>Optional</sup> <a name="network_security_group_ids_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIdsInput"></a>

```python
network_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_id_header_input`<sup>Optional</sup> <a name="request_id_header_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeaderInput"></a>

```python
request_id_header_input: str
```

- *Type:* str

---

##### `reserved_ips_input`<sup>Optional</sup> <a name="reserved_ips_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIpsInput"></a>

```python
reserved_ips_input: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerReservedIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]]

---

##### `shape_details_input`<sup>Optional</sup> <a name="shape_details_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetailsInput"></a>

```python
shape_details_input: LoadBalancerLoadBalancerShapeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LoadBalancerLoadBalancerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_mode`<sup>Required</sup> <a name="ip_mode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipMode"></a>

```python
ip_mode: str
```

- *Type:* str

---

##### `is_delete_protection_enabled`<sup>Required</sup> <a name="is_delete_protection_enabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabled"></a>

```python
is_delete_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_private`<sup>Required</sup> <a name="is_private" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivate"></a>

```python
is_private: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_request_id_enabled`<sup>Required</sup> <a name="is_request_id_enabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabled"></a>

```python
is_request_id_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_security_group_ids`<sup>Required</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIds"></a>

```python
network_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_id_header`<sup>Required</sup> <a name="request_id_header" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeader"></a>

```python
request_id_header: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerLoadBalancerConfig <a name="LoadBalancerLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  shape: str,
  subnet_ids: typing.List[str],
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ip_mode: str = None,
  is_delete_protection_enabled: typing.Union[bool, IResolvable] = None,
  is_private: typing.Union[bool, IResolvable] = None,
  is_request_id_enabled: typing.Union[bool, IResolvable] = None,
  network_security_group_ids: typing.List[str] = None,
  request_id_header: str = None,
  reserved_ips: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerReservedIps]] = None,
  shape_details: LoadBalancerLoadBalancerShapeDetails = None,
  timeouts: LoadBalancerLoadBalancerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.ipMode">ip_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isDeleteProtectionEnabled">is_delete_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isPrivate">is_private</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isRequestIdEnabled">is_request_id_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.requestIdHeader">request_id_header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.reservedIps">reserved_ips</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]]</code> | reserved_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shapeDetails">shape_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | shape_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_mode`<sup>Optional</sup> <a name="ip_mode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.ipMode"></a>

```python
ip_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}.

---

##### `is_delete_protection_enabled`<sup>Optional</sup> <a name="is_delete_protection_enabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isDeleteProtectionEnabled"></a>

```python
is_delete_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}.

---

##### `is_private`<sup>Optional</sup> <a name="is_private" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isPrivate"></a>

```python
is_private: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}.

---

##### `is_request_id_enabled`<sup>Optional</sup> <a name="is_request_id_enabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isRequestIdEnabled"></a>

```python
is_request_id_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}.

---

##### `network_security_group_ids`<sup>Optional</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.networkSecurityGroupIds"></a>

```python
network_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}.

---

##### `request_id_header`<sup>Optional</sup> <a name="request_id_header" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.requestIdHeader"></a>

```python
request_id_header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}.

---

##### `reserved_ips`<sup>Optional</sup> <a name="reserved_ips" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.reservedIps"></a>

```python
reserved_ips: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerReservedIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]]

reserved_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#reserved_ips LoadBalancerLoadBalancer#reserved_ips}

---

##### `shape_details`<sup>Optional</sup> <a name="shape_details" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shapeDetails"></a>

```python
shape_details: LoadBalancerLoadBalancerShapeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

shape_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape_details LoadBalancerLoadBalancer#shape_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.timeouts"></a>

```python
timeouts: LoadBalancerLoadBalancerTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#timeouts LoadBalancerLoadBalancer#timeouts}

---

### LoadBalancerLoadBalancerIpAddressDetails <a name="LoadBalancerLoadBalancerIpAddressDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails()
```


### LoadBalancerLoadBalancerIpAddressDetailsReservedIp <a name="LoadBalancerLoadBalancerIpAddressDetailsReservedIp" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp()
```


### LoadBalancerLoadBalancerReservedIps <a name="LoadBalancerLoadBalancerReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LoadBalancerLoadBalancerShapeDetails <a name="LoadBalancerLoadBalancerShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails(
  maximum_bandwidth_in_mbps: typing.Union[int, float],
  minimum_bandwidth_in_mbps: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.maximumBandwidthInMbps">maximum_bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#maximum_bandwidth_in_mbps LoadBalancerLoadBalancer#maximum_bandwidth_in_mbps}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.minimumBandwidthInMbps">minimum_bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#minimum_bandwidth_in_mbps LoadBalancerLoadBalancer#minimum_bandwidth_in_mbps}. |

---

##### `maximum_bandwidth_in_mbps`<sup>Required</sup> <a name="maximum_bandwidth_in_mbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.maximumBandwidthInMbps"></a>

```python
maximum_bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#maximum_bandwidth_in_mbps LoadBalancerLoadBalancer#maximum_bandwidth_in_mbps}.

---

##### `minimum_bandwidth_in_mbps`<sup>Required</sup> <a name="minimum_bandwidth_in_mbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.minimumBandwidthInMbps"></a>

```python
minimum_bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#minimum_bandwidth_in_mbps LoadBalancerLoadBalancer#minimum_bandwidth_in_mbps}.

---

### LoadBalancerLoadBalancerTimeouts <a name="LoadBalancerLoadBalancerTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#create LoadBalancerLoadBalancer#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#delete LoadBalancerLoadBalancer#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#update LoadBalancerLoadBalancer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#create LoadBalancerLoadBalancer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#delete LoadBalancerLoadBalancer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#update LoadBalancerLoadBalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerLoadBalancerIpAddressDetailsList <a name="LoadBalancerLoadBalancerIpAddressDetailsList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerLoadBalancerIpAddressDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LoadBalancerLoadBalancerIpAddressDetailsOutputReference <a name="LoadBalancerLoadBalancerIpAddressDetailsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.isPublic">is_public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.reservedIp">reserved_ip</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList">LoadBalancerLoadBalancerIpAddressDetailsReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails">LoadBalancerLoadBalancerIpAddressDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.isPublic"></a>

```python
is_public: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `reserved_ip`<sup>Required</sup> <a name="reserved_ip" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.reservedIp"></a>

```python
reserved_ip: LoadBalancerLoadBalancerIpAddressDetailsReservedIpList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList">LoadBalancerLoadBalancerIpAddressDetailsReservedIpList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerLoadBalancerIpAddressDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails">LoadBalancerLoadBalancerIpAddressDetails</a>

---


### LoadBalancerLoadBalancerIpAddressDetailsReservedIpList <a name="LoadBalancerLoadBalancerIpAddressDetailsReservedIpList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference <a name="LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp">LoadBalancerLoadBalancerIpAddressDetailsReservedIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerLoadBalancerIpAddressDetailsReservedIp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp">LoadBalancerLoadBalancerIpAddressDetailsReservedIp</a>

---


### LoadBalancerLoadBalancerReservedIpsList <a name="LoadBalancerLoadBalancerReservedIpsList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerLoadBalancerReservedIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerReservedIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]]

---


### LoadBalancerLoadBalancerReservedIpsOutputReference <a name="LoadBalancerLoadBalancerReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerLoadBalancerReservedIps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>]

---


### LoadBalancerLoadBalancerShapeDetailsOutputReference <a name="LoadBalancerLoadBalancerShapeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbpsInput">maximum_bandwidth_in_mbps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbpsInput">minimum_bandwidth_in_mbps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbps">maximum_bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbps">minimum_bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_bandwidth_in_mbps_input`<sup>Optional</sup> <a name="maximum_bandwidth_in_mbps_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbpsInput"></a>

```python
maximum_bandwidth_in_mbps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_bandwidth_in_mbps_input`<sup>Optional</sup> <a name="minimum_bandwidth_in_mbps_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbpsInput"></a>

```python
minimum_bandwidth_in_mbps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bandwidth_in_mbps`<sup>Required</sup> <a name="maximum_bandwidth_in_mbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbps"></a>

```python
maximum_bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_bandwidth_in_mbps`<sup>Required</sup> <a name="minimum_bandwidth_in_mbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbps"></a>

```python
minimum_bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerLoadBalancerShapeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

---


### LoadBalancerLoadBalancerTimeoutsOutputReference <a name="LoadBalancerLoadBalancerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer

loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerLoadBalancerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>]

---



