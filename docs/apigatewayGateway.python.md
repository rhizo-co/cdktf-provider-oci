# `apigatewayGateway` Submodule <a name="`apigatewayGateway` Submodule" id="rhizo-co-terraform-provider-oci.apigatewayGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayGateway <a name="ApigatewayGateway" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway oci_apigateway_gateway}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGateway(
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
  endpoint_type: str,
  subnet_id: str,
  ca_bundles: typing.Union[IResolvable, typing.List[ApigatewayGatewayCaBundles]] = None,
  certificate_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  network_security_group_ids: typing.List[str] = None,
  response_cache_details: ApigatewayGatewayResponseCacheDetails = None,
  timeouts: ApigatewayGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#compartment_id ApigatewayGateway#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#endpoint_type ApigatewayGateway#endpoint_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#subnet_id ApigatewayGateway#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.caBundles">ca_bundles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]]</code> | ca_bundles block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#certificate_id ApigatewayGateway#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#defined_tags ApigatewayGateway#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#display_name ApigatewayGateway#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#freeform_tags ApigatewayGateway#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#id ApigatewayGateway#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#network_security_group_ids ApigatewayGateway#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.responseCacheDetails">response_cache_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a></code> | response_cache_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#compartment_id ApigatewayGateway#compartment_id}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#endpoint_type ApigatewayGateway#endpoint_type}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#subnet_id ApigatewayGateway#subnet_id}.

---

##### `ca_bundles`<sup>Optional</sup> <a name="ca_bundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.caBundles"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]]

ca_bundles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#ca_bundles ApigatewayGateway#ca_bundles}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.certificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#certificate_id ApigatewayGateway#certificate_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#defined_tags ApigatewayGateway#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#display_name ApigatewayGateway#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#freeform_tags ApigatewayGateway#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#id ApigatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_security_group_ids`<sup>Optional</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.networkSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#network_security_group_ids ApigatewayGateway#network_security_group_ids}.

---

##### `response_cache_details`<sup>Optional</sup> <a name="response_cache_details" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.responseCacheDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a>

response_cache_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#response_cache_details ApigatewayGateway#response_cache_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#timeouts ApigatewayGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putCaBundles">put_ca_bundles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails">put_response_cache_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetCaBundles">reset_ca_bundles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetCertificateId">reset_certificate_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetNetworkSecurityGroupIds">reset_network_security_group_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetResponseCacheDetails">reset_response_cache_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ca_bundles` <a name="put_ca_bundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putCaBundles"></a>

```python
def put_ca_bundles(
  value: typing.Union[IResolvable, typing.List[ApigatewayGatewayCaBundles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putCaBundles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]]

---

##### `put_response_cache_details` <a name="put_response_cache_details" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails"></a>

```python
def put_response_cache_details(
  type: str,
  authentication_secret_id: str = None,
  authentication_secret_version_number: str = None,
  connect_timeout_in_ms: typing.Union[int, float] = None,
  is_ssl_enabled: typing.Union[bool, IResolvable] = None,
  is_ssl_verify_disabled: typing.Union[bool, IResolvable] = None,
  read_timeout_in_ms: typing.Union[int, float] = None,
  send_timeout_in_ms: typing.Union[int, float] = None,
  servers: typing.Union[IResolvable, typing.List[ApigatewayGatewayResponseCacheDetailsServers]] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}.

---

###### `authentication_secret_id`<sup>Optional</sup> <a name="authentication_secret_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails.parameter.authenticationSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#authentication_secret_id ApigatewayGateway#authentication_secret_id}.

---

###### `authentication_secret_version_number`<sup>Optional</sup> <a name="authentication_secret_version_number" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails.parameter.authenticationSecretVersionNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#authentication_secret_version_number ApigatewayGateway#authentication_secret_version_number}.

---

###### `connect_timeout_in_ms`<sup>Optional</sup> <a name="connect_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails.parameter.connectTimeoutInMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#connect_timeout_in_ms ApigatewayGateway#connect_timeout_in_ms}.

---

###### `is_ssl_enabled`<sup>Optional</sup> <a name="is_ssl_enabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails.parameter.isSslEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#is_ssl_enabled ApigatewayGateway#is_ssl_enabled}.

---

###### `is_ssl_verify_disabled`<sup>Optional</sup> <a name="is_ssl_verify_disabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails.parameter.isSslVerifyDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#is_ssl_verify_disabled ApigatewayGateway#is_ssl_verify_disabled}.

---

###### `read_timeout_in_ms`<sup>Optional</sup> <a name="read_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails.parameter.readTimeoutInMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#read_timeout_in_ms ApigatewayGateway#read_timeout_in_ms}.

---

###### `send_timeout_in_ms`<sup>Optional</sup> <a name="send_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails.parameter.sendTimeoutInMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#send_timeout_in_ms ApigatewayGateway#send_timeout_in_ms}.

---

###### `servers`<sup>Optional</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails.parameter.servers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers">ApigatewayGatewayResponseCacheDetailsServers</a>]]

servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#servers ApigatewayGateway#servers}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#create ApigatewayGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#delete ApigatewayGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#update ApigatewayGateway#update}.

---

##### `reset_ca_bundles` <a name="reset_ca_bundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetCaBundles"></a>

```python
def reset_ca_bundles() -> None
```

##### `reset_certificate_id` <a name="reset_certificate_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_security_group_ids` <a name="reset_network_security_group_ids" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetNetworkSecurityGroupIds"></a>

```python
def reset_network_security_group_ids() -> None
```

##### `reset_response_cache_details` <a name="reset_response_cache_details" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetResponseCacheDetails"></a>

```python
def reset_response_cache_details() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigatewayGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigatewayGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigatewayGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigatewayGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigatewayGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.caBundles">ca_bundles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList">ApigatewayGatewayCaBundlesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.ipAddresses">ip_addresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList">ApigatewayGatewayIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.responseCacheDetails">response_cache_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference">ApigatewayGatewayResponseCacheDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference">ApigatewayGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.caBundlesInput">ca_bundles_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.networkSecurityGroupIdsInput">network_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.responseCacheDetailsInput">response_cache_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ca_bundles`<sup>Required</sup> <a name="ca_bundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.caBundles"></a>

```python
ca_bundles: ApigatewayGatewayCaBundlesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList">ApigatewayGatewayCaBundlesList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.ipAddresses"></a>

```python
ip_addresses: ApigatewayGatewayIpAddressesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList">ApigatewayGatewayIpAddressesList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `response_cache_details`<sup>Required</sup> <a name="response_cache_details" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.responseCacheDetails"></a>

```python
response_cache_details: ApigatewayGatewayResponseCacheDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference">ApigatewayGatewayResponseCacheDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeouts"></a>

```python
timeouts: ApigatewayGatewayTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference">ApigatewayGatewayTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `ca_bundles_input`<sup>Optional</sup> <a name="ca_bundles_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.caBundlesInput"></a>

```python
ca_bundles_input: typing.Union[IResolvable, typing.List[ApigatewayGatewayCaBundles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]]

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_security_group_ids_input`<sup>Optional</sup> <a name="network_security_group_ids_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.networkSecurityGroupIdsInput"></a>

```python
network_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_cache_details_input`<sup>Optional</sup> <a name="response_cache_details_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.responseCacheDetailsInput"></a>

```python
response_cache_details_input: ApigatewayGatewayResponseCacheDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a>

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigatewayGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a>]

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_security_group_ids`<sup>Required</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.networkSecurityGroupIds"></a>

```python
network_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayGatewayCaBundles <a name="ApigatewayGatewayCaBundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayCaBundles(
  type: str,
  ca_bundle_id: str = None,
  certificate_authority_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.caBundleId">ca_bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#ca_bundle_id ApigatewayGateway#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#certificate_authority_id ApigatewayGateway#certificate_authority_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}.

---

##### `ca_bundle_id`<sup>Optional</sup> <a name="ca_bundle_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.caBundleId"></a>

```python
ca_bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#ca_bundle_id ApigatewayGateway#ca_bundle_id}.

---

##### `certificate_authority_id`<sup>Optional</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#certificate_authority_id ApigatewayGateway#certificate_authority_id}.

---

### ApigatewayGatewayConfig <a name="ApigatewayGatewayConfig" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  endpoint_type: str,
  subnet_id: str,
  ca_bundles: typing.Union[IResolvable, typing.List[ApigatewayGatewayCaBundles]] = None,
  certificate_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  network_security_group_ids: typing.List[str] = None,
  response_cache_details: ApigatewayGatewayResponseCacheDetails = None,
  timeouts: ApigatewayGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#compartment_id ApigatewayGateway#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#endpoint_type ApigatewayGateway#endpoint_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#subnet_id ApigatewayGateway#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.caBundles">ca_bundles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]]</code> | ca_bundles block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#certificate_id ApigatewayGateway#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#defined_tags ApigatewayGateway#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#display_name ApigatewayGateway#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#freeform_tags ApigatewayGateway#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#id ApigatewayGateway#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#network_security_group_ids ApigatewayGateway#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.responseCacheDetails">response_cache_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a></code> | response_cache_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#compartment_id ApigatewayGateway#compartment_id}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#endpoint_type ApigatewayGateway#endpoint_type}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#subnet_id ApigatewayGateway#subnet_id}.

---

##### `ca_bundles`<sup>Optional</sup> <a name="ca_bundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.caBundles"></a>

```python
ca_bundles: typing.Union[IResolvable, typing.List[ApigatewayGatewayCaBundles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]]

ca_bundles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#ca_bundles ApigatewayGateway#ca_bundles}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#certificate_id ApigatewayGateway#certificate_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#defined_tags ApigatewayGateway#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#display_name ApigatewayGateway#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#freeform_tags ApigatewayGateway#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#id ApigatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_security_group_ids`<sup>Optional</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.networkSecurityGroupIds"></a>

```python
network_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#network_security_group_ids ApigatewayGateway#network_security_group_ids}.

---

##### `response_cache_details`<sup>Optional</sup> <a name="response_cache_details" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.responseCacheDetails"></a>

```python
response_cache_details: ApigatewayGatewayResponseCacheDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a>

response_cache_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#response_cache_details ApigatewayGateway#response_cache_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.timeouts"></a>

```python
timeouts: ApigatewayGatewayTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#timeouts ApigatewayGateway#timeouts}

---

### ApigatewayGatewayIpAddresses <a name="ApigatewayGatewayIpAddresses" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddresses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayIpAddresses()
```


### ApigatewayGatewayResponseCacheDetails <a name="ApigatewayGatewayResponseCacheDetails" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayResponseCacheDetails(
  type: str,
  authentication_secret_id: str = None,
  authentication_secret_version_number: str = None,
  connect_timeout_in_ms: typing.Union[int, float] = None,
  is_ssl_enabled: typing.Union[bool, IResolvable] = None,
  is_ssl_verify_disabled: typing.Union[bool, IResolvable] = None,
  read_timeout_in_ms: typing.Union[int, float] = None,
  send_timeout_in_ms: typing.Union[int, float] = None,
  servers: typing.Union[IResolvable, typing.List[ApigatewayGatewayResponseCacheDetailsServers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.authenticationSecretId">authentication_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#authentication_secret_id ApigatewayGateway#authentication_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.authenticationSecretVersionNumber">authentication_secret_version_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#authentication_secret_version_number ApigatewayGateway#authentication_secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.connectTimeoutInMs">connect_timeout_in_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#connect_timeout_in_ms ApigatewayGateway#connect_timeout_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.isSslEnabled">is_ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#is_ssl_enabled ApigatewayGateway#is_ssl_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.isSslVerifyDisabled">is_ssl_verify_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#is_ssl_verify_disabled ApigatewayGateway#is_ssl_verify_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.readTimeoutInMs">read_timeout_in_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#read_timeout_in_ms ApigatewayGateway#read_timeout_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.sendTimeoutInMs">send_timeout_in_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#send_timeout_in_ms ApigatewayGateway#send_timeout_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.servers">servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers">ApigatewayGatewayResponseCacheDetailsServers</a>]]</code> | servers block. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}.

---

##### `authentication_secret_id`<sup>Optional</sup> <a name="authentication_secret_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.authenticationSecretId"></a>

```python
authentication_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#authentication_secret_id ApigatewayGateway#authentication_secret_id}.

---

##### `authentication_secret_version_number`<sup>Optional</sup> <a name="authentication_secret_version_number" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.authenticationSecretVersionNumber"></a>

```python
authentication_secret_version_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#authentication_secret_version_number ApigatewayGateway#authentication_secret_version_number}.

---

##### `connect_timeout_in_ms`<sup>Optional</sup> <a name="connect_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.connectTimeoutInMs"></a>

```python
connect_timeout_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#connect_timeout_in_ms ApigatewayGateway#connect_timeout_in_ms}.

---

##### `is_ssl_enabled`<sup>Optional</sup> <a name="is_ssl_enabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.isSslEnabled"></a>

```python
is_ssl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#is_ssl_enabled ApigatewayGateway#is_ssl_enabled}.

---

##### `is_ssl_verify_disabled`<sup>Optional</sup> <a name="is_ssl_verify_disabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.isSslVerifyDisabled"></a>

```python
is_ssl_verify_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#is_ssl_verify_disabled ApigatewayGateway#is_ssl_verify_disabled}.

---

##### `read_timeout_in_ms`<sup>Optional</sup> <a name="read_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.readTimeoutInMs"></a>

```python
read_timeout_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#read_timeout_in_ms ApigatewayGateway#read_timeout_in_ms}.

---

##### `send_timeout_in_ms`<sup>Optional</sup> <a name="send_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.sendTimeoutInMs"></a>

```python
send_timeout_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#send_timeout_in_ms ApigatewayGateway#send_timeout_in_ms}.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.servers"></a>

```python
servers: typing.Union[IResolvable, typing.List[ApigatewayGatewayResponseCacheDetailsServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers">ApigatewayGatewayResponseCacheDetailsServers</a>]]

servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#servers ApigatewayGateway#servers}

---

### ApigatewayGatewayResponseCacheDetailsServers <a name="ApigatewayGatewayResponseCacheDetailsServers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers(
  host: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#host ApigatewayGateway#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#port ApigatewayGateway#port}. |

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#host ApigatewayGateway#host}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#port ApigatewayGateway#port}.

---

### ApigatewayGatewayTimeouts <a name="ApigatewayGatewayTimeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#create ApigatewayGateway#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#delete ApigatewayGateway#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#update ApigatewayGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#create ApigatewayGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#delete ApigatewayGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#update ApigatewayGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayGatewayCaBundlesList <a name="ApigatewayGatewayCaBundlesList" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayCaBundlesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayGatewayCaBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigatewayGatewayCaBundles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]]

---


### ApigatewayGatewayCaBundlesOutputReference <a name="ApigatewayGatewayCaBundlesOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resetCaBundleId">reset_ca_bundle_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resetCertificateAuthorityId">reset_certificate_authority_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_bundle_id` <a name="reset_ca_bundle_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resetCaBundleId"></a>

```python
def reset_ca_bundle_id() -> None
```

##### `reset_certificate_authority_id` <a name="reset_certificate_authority_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resetCertificateAuthorityId"></a>

```python
def reset_certificate_authority_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.caBundleIdInput">ca_bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.certificateAuthorityIdInput">certificate_authority_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.caBundleId">ca_bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_bundle_id_input`<sup>Optional</sup> <a name="ca_bundle_id_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.caBundleIdInput"></a>

```python
ca_bundle_id_input: str
```

- *Type:* str

---

##### `certificate_authority_id_input`<sup>Optional</sup> <a name="certificate_authority_id_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.certificateAuthorityIdInput"></a>

```python
certificate_authority_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `ca_bundle_id`<sup>Required</sup> <a name="ca_bundle_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.caBundleId"></a>

```python
ca_bundle_id: str
```

- *Type:* str

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigatewayGatewayCaBundles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles">ApigatewayGatewayCaBundles</a>]

---


### ApigatewayGatewayIpAddressesList <a name="ApigatewayGatewayIpAddressesList" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayIpAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayGatewayIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApigatewayGatewayIpAddressesOutputReference <a name="ApigatewayGatewayIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddresses">ApigatewayGatewayIpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: ApigatewayGatewayIpAddresses
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddresses">ApigatewayGatewayIpAddresses</a>

---


### ApigatewayGatewayResponseCacheDetailsOutputReference <a name="ApigatewayGatewayResponseCacheDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.putServers">put_servers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetAuthenticationSecretId">reset_authentication_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetAuthenticationSecretVersionNumber">reset_authentication_secret_version_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetConnectTimeoutInMs">reset_connect_timeout_in_ms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetIsSslEnabled">reset_is_ssl_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetIsSslVerifyDisabled">reset_is_ssl_verify_disabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetReadTimeoutInMs">reset_read_timeout_in_ms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetSendTimeoutInMs">reset_send_timeout_in_ms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetServers">reset_servers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_servers` <a name="put_servers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.putServers"></a>

```python
def put_servers(
  value: typing.Union[IResolvable, typing.List[ApigatewayGatewayResponseCacheDetailsServers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.putServers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers">ApigatewayGatewayResponseCacheDetailsServers</a>]]

---

##### `reset_authentication_secret_id` <a name="reset_authentication_secret_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetAuthenticationSecretId"></a>

```python
def reset_authentication_secret_id() -> None
```

##### `reset_authentication_secret_version_number` <a name="reset_authentication_secret_version_number" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetAuthenticationSecretVersionNumber"></a>

```python
def reset_authentication_secret_version_number() -> None
```

##### `reset_connect_timeout_in_ms` <a name="reset_connect_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetConnectTimeoutInMs"></a>

```python
def reset_connect_timeout_in_ms() -> None
```

##### `reset_is_ssl_enabled` <a name="reset_is_ssl_enabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetIsSslEnabled"></a>

```python
def reset_is_ssl_enabled() -> None
```

##### `reset_is_ssl_verify_disabled` <a name="reset_is_ssl_verify_disabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetIsSslVerifyDisabled"></a>

```python
def reset_is_ssl_verify_disabled() -> None
```

##### `reset_read_timeout_in_ms` <a name="reset_read_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetReadTimeoutInMs"></a>

```python
def reset_read_timeout_in_ms() -> None
```

##### `reset_send_timeout_in_ms` <a name="reset_send_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetSendTimeoutInMs"></a>

```python
def reset_send_timeout_in_ms() -> None
```

##### `reset_servers` <a name="reset_servers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetServers"></a>

```python
def reset_servers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.servers">servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList">ApigatewayGatewayResponseCacheDetailsServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretIdInput">authentication_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumberInput">authentication_secret_version_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.connectTimeoutInMsInput">connect_timeout_in_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslEnabledInput">is_ssl_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslVerifyDisabledInput">is_ssl_verify_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.readTimeoutInMsInput">read_timeout_in_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.sendTimeoutInMsInput">send_timeout_in_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.serversInput">servers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers">ApigatewayGatewayResponseCacheDetailsServers</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretId">authentication_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumber">authentication_secret_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.connectTimeoutInMs">connect_timeout_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslEnabled">is_ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslVerifyDisabled">is_ssl_verify_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.readTimeoutInMs">read_timeout_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.sendTimeoutInMs">send_timeout_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.servers"></a>

```python
servers: ApigatewayGatewayResponseCacheDetailsServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList">ApigatewayGatewayResponseCacheDetailsServersList</a>

---

##### `authentication_secret_id_input`<sup>Optional</sup> <a name="authentication_secret_id_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretIdInput"></a>

```python
authentication_secret_id_input: str
```

- *Type:* str

---

##### `authentication_secret_version_number_input`<sup>Optional</sup> <a name="authentication_secret_version_number_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumberInput"></a>

```python
authentication_secret_version_number_input: str
```

- *Type:* str

---

##### `connect_timeout_in_ms_input`<sup>Optional</sup> <a name="connect_timeout_in_ms_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.connectTimeoutInMsInput"></a>

```python
connect_timeout_in_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_ssl_enabled_input`<sup>Optional</sup> <a name="is_ssl_enabled_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslEnabledInput"></a>

```python
is_ssl_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_ssl_verify_disabled_input`<sup>Optional</sup> <a name="is_ssl_verify_disabled_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslVerifyDisabledInput"></a>

```python
is_ssl_verify_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_timeout_in_ms_input`<sup>Optional</sup> <a name="read_timeout_in_ms_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.readTimeoutInMsInput"></a>

```python
read_timeout_in_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_timeout_in_ms_input`<sup>Optional</sup> <a name="send_timeout_in_ms_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.sendTimeoutInMsInput"></a>

```python
send_timeout_in_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `servers_input`<sup>Optional</sup> <a name="servers_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.serversInput"></a>

```python
servers_input: typing.Union[IResolvable, typing.List[ApigatewayGatewayResponseCacheDetailsServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers">ApigatewayGatewayResponseCacheDetailsServers</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `authentication_secret_id`<sup>Required</sup> <a name="authentication_secret_id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretId"></a>

```python
authentication_secret_id: str
```

- *Type:* str

---

##### `authentication_secret_version_number`<sup>Required</sup> <a name="authentication_secret_version_number" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumber"></a>

```python
authentication_secret_version_number: str
```

- *Type:* str

---

##### `connect_timeout_in_ms`<sup>Required</sup> <a name="connect_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.connectTimeoutInMs"></a>

```python
connect_timeout_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_ssl_enabled`<sup>Required</sup> <a name="is_ssl_enabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslEnabled"></a>

```python
is_ssl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_ssl_verify_disabled`<sup>Required</sup> <a name="is_ssl_verify_disabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslVerifyDisabled"></a>

```python
is_ssl_verify_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_timeout_in_ms`<sup>Required</sup> <a name="read_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.readTimeoutInMs"></a>

```python
read_timeout_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_timeout_in_ms`<sup>Required</sup> <a name="send_timeout_in_ms" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.sendTimeoutInMs"></a>

```python
send_timeout_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ApigatewayGatewayResponseCacheDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a>

---


### ApigatewayGatewayResponseCacheDetailsServersList <a name="ApigatewayGatewayResponseCacheDetailsServersList" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayGatewayResponseCacheDetailsServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers">ApigatewayGatewayResponseCacheDetailsServers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigatewayGatewayResponseCacheDetailsServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers">ApigatewayGatewayResponseCacheDetailsServers</a>]]

---


### ApigatewayGatewayResponseCacheDetailsServersOutputReference <a name="ApigatewayGatewayResponseCacheDetailsServersOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers">ApigatewayGatewayResponseCacheDetailsServers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigatewayGatewayResponseCacheDetailsServers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers">ApigatewayGatewayResponseCacheDetailsServers</a>]

---


### ApigatewayGatewayTimeoutsOutputReference <a name="ApigatewayGatewayTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apigateway_gateway

apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigatewayGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a>]

---



