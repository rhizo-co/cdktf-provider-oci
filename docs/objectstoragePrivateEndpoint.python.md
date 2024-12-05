# `objectstoragePrivateEndpoint` Submodule <a name="`objectstoragePrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstoragePrivateEndpoint <a name="ObjectstoragePrivateEndpoint" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint oci_objectstorage_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_targets: typing.Union[IResolvable, typing.List[ObjectstoragePrivateEndpointAccessTargets]],
  compartment_id: str,
  name: str,
  namespace: str,
  prefix: str,
  subnet_id: str,
  additional_prefixes: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  fqdns: typing.Union[IResolvable, typing.Mapping[typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]]] = None,
  freeform_tags: typing.Mapping[str] = None,
  nsg_ids: typing.List[str] = None,
  private_endpoint_ip: str = None,
  state: str = None,
  timeouts: ObjectstoragePrivateEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.accessTargets">access_targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]]</code> | access_targets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#compartment_id ObjectstoragePrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#name ObjectstoragePrivateEndpoint#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#namespace ObjectstoragePrivateEndpoint#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#prefix ObjectstoragePrivateEndpoint#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#subnet_id ObjectstoragePrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.additionalPrefixes">additional_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#additional_prefixes ObjectstoragePrivateEndpoint#additional_prefixes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#defined_tags ObjectstoragePrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.fqdns">fqdns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#fqdns ObjectstoragePrivateEndpoint#fqdns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#freeform_tags ObjectstoragePrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#nsg_ids ObjectstoragePrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#private_endpoint_ip ObjectstoragePrivateEndpoint#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#state ObjectstoragePrivateEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_targets`<sup>Required</sup> <a name="access_targets" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.accessTargets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]]

access_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#access_targets ObjectstoragePrivateEndpoint#access_targets}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#compartment_id ObjectstoragePrivateEndpoint#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#name ObjectstoragePrivateEndpoint#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#namespace ObjectstoragePrivateEndpoint#namespace}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#prefix ObjectstoragePrivateEndpoint#prefix}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#subnet_id ObjectstoragePrivateEndpoint#subnet_id}.

---

##### `additional_prefixes`<sup>Optional</sup> <a name="additional_prefixes" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.additionalPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#additional_prefixes ObjectstoragePrivateEndpoint#additional_prefixes}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#defined_tags ObjectstoragePrivateEndpoint#defined_tags}.

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.fqdns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#fqdns ObjectstoragePrivateEndpoint#fqdns}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#freeform_tags ObjectstoragePrivateEndpoint#freeform_tags}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#nsg_ids ObjectstoragePrivateEndpoint#nsg_ids}.

---

##### `private_endpoint_ip`<sup>Optional</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.privateEndpointIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#private_endpoint_ip ObjectstoragePrivateEndpoint#private_endpoint_ip}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#state ObjectstoragePrivateEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#timeouts ObjectstoragePrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putAccessTargets">put_access_targets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetAdditionalPrefixes">reset_additional_prefixes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetFqdns">reset_fqdns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetPrivateEndpointIp">reset_private_endpoint_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_targets` <a name="put_access_targets" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putAccessTargets"></a>

```python
def put_access_targets(
  value: typing.Union[IResolvable, typing.List[ObjectstoragePrivateEndpointAccessTargets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putAccessTargets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#create ObjectstoragePrivateEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#delete ObjectstoragePrivateEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#update ObjectstoragePrivateEndpoint#update}.

---

##### `reset_additional_prefixes` <a name="reset_additional_prefixes" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetAdditionalPrefixes"></a>

```python
def reset_additional_prefixes() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_fqdns` <a name="reset_fqdns" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetFqdns"></a>

```python
def reset_fqdns() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_private_endpoint_ip` <a name="reset_private_endpoint_ip" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetPrivateEndpointIp"></a>

```python
def reset_private_endpoint_ip() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ObjectstoragePrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ObjectstoragePrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObjectstoragePrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObjectstoragePrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstoragePrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.accessTargets">access_targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList">ObjectstoragePrivateEndpointAccessTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference">ObjectstoragePrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.accessTargetsInput">access_targets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.additionalPrefixesInput">additional_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqdnsInput">fqdns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.privateEndpointIpInput">private_endpoint_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.additionalPrefixes">additional_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqdns">fqdns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_targets`<sup>Required</sup> <a name="access_targets" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.accessTargets"></a>

```python
access_targets: ObjectstoragePrivateEndpointAccessTargetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList">ObjectstoragePrivateEndpointAccessTargetsList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeouts"></a>

```python
timeouts: ObjectstoragePrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference">ObjectstoragePrivateEndpointTimeoutsOutputReference</a>

---

##### `access_targets_input`<sup>Optional</sup> <a name="access_targets_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.accessTargetsInput"></a>

```python
access_targets_input: typing.Union[IResolvable, typing.List[ObjectstoragePrivateEndpointAccessTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]]

---

##### `additional_prefixes_input`<sup>Optional</sup> <a name="additional_prefixes_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.additionalPrefixesInput"></a>

```python
additional_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fqdns_input`<sup>Optional</sup> <a name="fqdns_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqdnsInput"></a>

```python
fqdns_input: typing.Union[IResolvable, typing.Mapping[typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]]]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `private_endpoint_ip_input`<sup>Optional</sup> <a name="private_endpoint_ip_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.privateEndpointIpInput"></a>

```python
private_endpoint_ip_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ObjectstoragePrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a>]

---

##### `additional_prefixes`<sup>Required</sup> <a name="additional_prefixes" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.additionalPrefixes"></a>

```python
additional_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.fqdns"></a>

```python
fqdns: typing.Union[IResolvable, typing.Mapping[typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]]]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstoragePrivateEndpointAccessTargets <a name="ObjectstoragePrivateEndpointAccessTargets" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets(
  bucket: str,
  compartment_id: str,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#bucket ObjectstoragePrivateEndpoint#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#compartment_id ObjectstoragePrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#namespace ObjectstoragePrivateEndpoint#namespace}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#bucket ObjectstoragePrivateEndpoint#bucket}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#compartment_id ObjectstoragePrivateEndpoint#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#namespace ObjectstoragePrivateEndpoint#namespace}.

---

### ObjectstoragePrivateEndpointConfig <a name="ObjectstoragePrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_targets: typing.Union[IResolvable, typing.List[ObjectstoragePrivateEndpointAccessTargets]],
  compartment_id: str,
  name: str,
  namespace: str,
  prefix: str,
  subnet_id: str,
  additional_prefixes: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  fqdns: typing.Union[IResolvable, typing.Mapping[typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]]] = None,
  freeform_tags: typing.Mapping[str] = None,
  nsg_ids: typing.List[str] = None,
  private_endpoint_ip: str = None,
  state: str = None,
  timeouts: ObjectstoragePrivateEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.accessTargets">access_targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]]</code> | access_targets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#compartment_id ObjectstoragePrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#name ObjectstoragePrivateEndpoint#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#namespace ObjectstoragePrivateEndpoint#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#prefix ObjectstoragePrivateEndpoint#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#subnet_id ObjectstoragePrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.additionalPrefixes">additional_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#additional_prefixes ObjectstoragePrivateEndpoint#additional_prefixes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#defined_tags ObjectstoragePrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.fqdns">fqdns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#fqdns ObjectstoragePrivateEndpoint#fqdns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#freeform_tags ObjectstoragePrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#nsg_ids ObjectstoragePrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#private_endpoint_ip ObjectstoragePrivateEndpoint#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#state ObjectstoragePrivateEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_targets`<sup>Required</sup> <a name="access_targets" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.accessTargets"></a>

```python
access_targets: typing.Union[IResolvable, typing.List[ObjectstoragePrivateEndpointAccessTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]]

access_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#access_targets ObjectstoragePrivateEndpoint#access_targets}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#compartment_id ObjectstoragePrivateEndpoint#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#name ObjectstoragePrivateEndpoint#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#namespace ObjectstoragePrivateEndpoint#namespace}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#prefix ObjectstoragePrivateEndpoint#prefix}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#subnet_id ObjectstoragePrivateEndpoint#subnet_id}.

---

##### `additional_prefixes`<sup>Optional</sup> <a name="additional_prefixes" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.additionalPrefixes"></a>

```python
additional_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#additional_prefixes ObjectstoragePrivateEndpoint#additional_prefixes}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#defined_tags ObjectstoragePrivateEndpoint#defined_tags}.

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.fqdns"></a>

```python
fqdns: typing.Union[IResolvable, typing.Mapping[typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#fqdns ObjectstoragePrivateEndpoint#fqdns}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#freeform_tags ObjectstoragePrivateEndpoint#freeform_tags}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#nsg_ids ObjectstoragePrivateEndpoint#nsg_ids}.

---

##### `private_endpoint_ip`<sup>Optional</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#private_endpoint_ip ObjectstoragePrivateEndpoint#private_endpoint_ip}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#state ObjectstoragePrivateEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointConfig.property.timeouts"></a>

```python
timeouts: ObjectstoragePrivateEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#timeouts ObjectstoragePrivateEndpoint#timeouts}

---

### ObjectstoragePrivateEndpointTimeouts <a name="ObjectstoragePrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#create ObjectstoragePrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#delete ObjectstoragePrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#update ObjectstoragePrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#create ObjectstoragePrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#delete ObjectstoragePrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_private_endpoint#update ObjectstoragePrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstoragePrivateEndpointAccessTargetsList <a name="ObjectstoragePrivateEndpointAccessTargetsList" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObjectstoragePrivateEndpointAccessTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObjectstoragePrivateEndpointAccessTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]]

---


### ObjectstoragePrivateEndpointAccessTargetsOutputReference <a name="ObjectstoragePrivateEndpointAccessTargetsOutputReference" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObjectstoragePrivateEndpointAccessTargets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointAccessTargets">ObjectstoragePrivateEndpointAccessTargets</a>]

---


### ObjectstoragePrivateEndpointTimeoutsOutputReference <a name="ObjectstoragePrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_private_endpoint

objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObjectstoragePrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstoragePrivateEndpoint.ObjectstoragePrivateEndpointTimeouts">ObjectstoragePrivateEndpointTimeouts</a>]

---



