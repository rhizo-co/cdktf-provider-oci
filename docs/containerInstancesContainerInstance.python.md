# `containerInstancesContainerInstance` Submodule <a name="`containerInstancesContainerInstance` Submodule" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerInstancesContainerInstance <a name="ContainerInstancesContainerInstance" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance oci_container_instances_container_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  containers: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainers]],
  shape: str,
  shape_config: ContainerInstancesContainerInstanceShapeConfig,
  vnics: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVnics]],
  container_restart_policy: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  dns_config: ContainerInstancesContainerInstanceDnsConfig = None,
  fault_domain: str = None,
  freeform_tags: typing.Mapping[str] = None,
  graceful_shutdown_timeout_in_seconds: str = None,
  id: str = None,
  image_pull_secrets: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceImagePullSecrets]] = None,
  state: str = None,
  timeouts: ContainerInstancesContainerInstanceTimeouts = None,
  volumes: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumes]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.containers">containers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]]</code> | containers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.vnics">vnics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]]</code> | vnics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.containerRestartPolicy">container_restart_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.dnsConfig">dns_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | dns_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.faultDomain">fault_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.gracefulShutdownTimeoutInSeconds">graceful_shutdown_timeout_in_seconds</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.imagePullSecrets">image_pull_secrets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]]</code> | image_pull_secrets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]]</code> | volumes block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}.

---

##### `containers`<sup>Required</sup> <a name="containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.containers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#containers ContainerInstancesContainerInstance#containers}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}.

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape_config ContainerInstancesContainerInstance#shape_config}

---

##### `vnics`<sup>Required</sup> <a name="vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.vnics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]]

vnics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vnics ContainerInstancesContainerInstance#vnics}

---

##### `container_restart_policy`<sup>Optional</sup> <a name="container_restart_policy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.containerRestartPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `dns_config`<sup>Optional</sup> <a name="dns_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.dnsConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#dns_config ContainerInstancesContainerInstance#dns_config}

---

##### `fault_domain`<sup>Optional</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.faultDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `graceful_shutdown_timeout_in_seconds`<sup>Optional</sup> <a name="graceful_shutdown_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.gracefulShutdownTimeoutInSeconds"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_pull_secrets`<sup>Optional</sup> <a name="image_pull_secrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.imagePullSecrets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]]

image_pull_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_pull_secrets ContainerInstancesContainerInstance#image_pull_secrets}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeouts ContainerInstancesContainerInstance#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.volumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volumes ContainerInstancesContainerInstance#volumes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers">put_containers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig">put_dns_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets">put_image_pull_secrets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig">put_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics">put_vnics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetContainerRestartPolicy">reset_container_restart_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDnsConfig">reset_dns_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFaultDomain">reset_fault_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetGracefulShutdownTimeoutInSeconds">reset_graceful_shutdown_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetImagePullSecrets">reset_image_pull_secrets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_containers` <a name="put_containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers"></a>

```python
def put_containers(
  value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]]

---

##### `put_dns_config` <a name="put_dns_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig"></a>

```python
def put_dns_config(
  nameservers: typing.List[str] = None,
  options: typing.List[str] = None,
  searches: typing.List[str] = None
) -> None
```

###### `nameservers`<sup>Optional</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig.parameter.nameservers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}.

---

###### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig.parameter.options"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}.

---

###### `searches`<sup>Optional</sup> <a name="searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig.parameter.searches"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}.

---

##### `put_image_pull_secrets` <a name="put_image_pull_secrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets"></a>

```python
def put_image_pull_secrets(
  value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceImagePullSecrets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]]

---

##### `put_shape_config` <a name="put_shape_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig"></a>

```python
def put_shape_config(
  ocpus: typing.Union[int, float],
  memory_in_gbs: typing.Union[int, float] = None
) -> None
```

###### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}.

---

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}.

---

##### `put_vnics` <a name="put_vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics"></a>

```python
def put_vnics(
  value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVnics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]]

---

##### `put_volumes` <a name="put_volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes"></a>

```python
def put_volumes(
  value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]]

---

##### `reset_container_restart_policy` <a name="reset_container_restart_policy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetContainerRestartPolicy"></a>

```python
def reset_container_restart_policy() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_dns_config` <a name="reset_dns_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDnsConfig"></a>

```python
def reset_dns_config() -> None
```

##### `reset_fault_domain` <a name="reset_fault_domain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFaultDomain"></a>

```python
def reset_fault_domain() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_graceful_shutdown_timeout_in_seconds` <a name="reset_graceful_shutdown_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetGracefulShutdownTimeoutInSeconds"></a>

```python
def reset_graceful_shutdown_timeout_in_seconds() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_pull_secrets` <a name="reset_image_pull_secrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetImagePullSecrets"></a>

```python
def reset_image_pull_secrets() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetVolumes"></a>

```python
def reset_volumes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerInstancesContainerInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerInstancesContainerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerInstancesContainerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerCount">container_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containers">containers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList">ContainerInstancesContainerInstanceContainersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfig">dns_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference">ContainerInstancesContainerInstanceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecrets">image_pull_secrets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList">ContainerInstancesContainerInstanceImagePullSecretsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference">ContainerInstancesContainerInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference">ContainerInstancesContainerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnics">vnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList">ContainerInstancesContainerInstanceVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumeCount">volume_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList">ContainerInstancesContainerInstanceVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicyInput">container_restart_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containersInput">containers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfigInput">dns_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomainInput">fault_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSecondsInput">graceful_shutdown_timeout_in_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecretsInput">image_pull_secrets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfigInput">shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnicsInput">vnics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumesInput">volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicy">container_restart_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds">graceful_shutdown_timeout_in_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_count`<sup>Required</sup> <a name="container_count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerCount"></a>

```python
container_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `containers`<sup>Required</sup> <a name="containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containers"></a>

```python
containers: ContainerInstancesContainerInstanceContainersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList">ContainerInstancesContainerInstanceContainersList</a>

---

##### `dns_config`<sup>Required</sup> <a name="dns_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfig"></a>

```python
dns_config: ContainerInstancesContainerInstanceDnsConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference">ContainerInstancesContainerInstanceDnsConfigOutputReference</a>

---

##### `image_pull_secrets`<sup>Required</sup> <a name="image_pull_secrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecrets"></a>

```python
image_pull_secrets: ContainerInstancesContainerInstanceImagePullSecretsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList">ContainerInstancesContainerInstanceImagePullSecretsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfig"></a>

```python
shape_config: ContainerInstancesContainerInstanceShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference">ContainerInstancesContainerInstanceShapeConfigOutputReference</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeouts"></a>

```python
timeouts: ContainerInstancesContainerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference">ContainerInstancesContainerInstanceTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vnics`<sup>Required</sup> <a name="vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnics"></a>

```python
vnics: ContainerInstancesContainerInstanceVnicsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList">ContainerInstancesContainerInstanceVnicsList</a>

---

##### `volume_count`<sup>Required</sup> <a name="volume_count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumeCount"></a>

```python
volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumes"></a>

```python
volumes: ContainerInstancesContainerInstanceVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList">ContainerInstancesContainerInstanceVolumesList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `container_restart_policy_input`<sup>Optional</sup> <a name="container_restart_policy_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicyInput"></a>

```python
container_restart_policy_input: str
```

- *Type:* str

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containersInput"></a>

```python
containers_input: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dns_config_input`<sup>Optional</sup> <a name="dns_config_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfigInput"></a>

```python
dns_config_input: ContainerInstancesContainerInstanceDnsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---

##### `fault_domain_input`<sup>Optional</sup> <a name="fault_domain_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomainInput"></a>

```python
fault_domain_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `graceful_shutdown_timeout_in_seconds_input`<sup>Optional</sup> <a name="graceful_shutdown_timeout_in_seconds_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSecondsInput"></a>

```python
graceful_shutdown_timeout_in_seconds_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_pull_secrets_input`<sup>Optional</sup> <a name="image_pull_secrets_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecretsInput"></a>

```python
image_pull_secrets_input: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceImagePullSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]]

---

##### `shape_config_input`<sup>Optional</sup> <a name="shape_config_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfigInput"></a>

```python
shape_config_input: ContainerInstancesContainerInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerInstancesContainerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>]

---

##### `vnics_input`<sup>Optional</sup> <a name="vnics_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnicsInput"></a>

```python
vnics_input: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVnics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]]

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumesInput"></a>

```python
volumes_input: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `container_restart_policy`<sup>Required</sup> <a name="container_restart_policy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicy"></a>

```python
container_restart_policy: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `graceful_shutdown_timeout_in_seconds`<sup>Required</sup> <a name="graceful_shutdown_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds"></a>

```python
graceful_shutdown_timeout_in_seconds: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerInstancesContainerInstanceConfig <a name="ContainerInstancesContainerInstanceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  containers: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainers]],
  shape: str,
  shape_config: ContainerInstancesContainerInstanceShapeConfig,
  vnics: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVnics]],
  container_restart_policy: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  dns_config: ContainerInstancesContainerInstanceDnsConfig = None,
  fault_domain: str = None,
  freeform_tags: typing.Mapping[str] = None,
  graceful_shutdown_timeout_in_seconds: str = None,
  id: str = None,
  image_pull_secrets: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceImagePullSecrets]] = None,
  state: str = None,
  timeouts: ContainerInstancesContainerInstanceTimeouts = None,
  volumes: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumes]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containers">containers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]]</code> | containers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.vnics">vnics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]]</code> | vnics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containerRestartPolicy">container_restart_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dnsConfig">dns_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | dns_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.faultDomain">fault_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.gracefulShutdownTimeoutInSeconds">graceful_shutdown_timeout_in_seconds</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.imagePullSecrets">image_pull_secrets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]]</code> | image_pull_secrets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]]</code> | volumes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}.

---

##### `containers`<sup>Required</sup> <a name="containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containers"></a>

```python
containers: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#containers ContainerInstancesContainerInstance#containers}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}.

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shapeConfig"></a>

```python
shape_config: ContainerInstancesContainerInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape_config ContainerInstancesContainerInstance#shape_config}

---

##### `vnics`<sup>Required</sup> <a name="vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.vnics"></a>

```python
vnics: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVnics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]]

vnics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vnics ContainerInstancesContainerInstance#vnics}

---

##### `container_restart_policy`<sup>Optional</sup> <a name="container_restart_policy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containerRestartPolicy"></a>

```python
container_restart_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `dns_config`<sup>Optional</sup> <a name="dns_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dnsConfig"></a>

```python
dns_config: ContainerInstancesContainerInstanceDnsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#dns_config ContainerInstancesContainerInstance#dns_config}

---

##### `fault_domain`<sup>Optional</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `graceful_shutdown_timeout_in_seconds`<sup>Optional</sup> <a name="graceful_shutdown_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.gracefulShutdownTimeoutInSeconds"></a>

```python
graceful_shutdown_timeout_in_seconds: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_pull_secrets`<sup>Optional</sup> <a name="image_pull_secrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.imagePullSecrets"></a>

```python
image_pull_secrets: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceImagePullSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]]

image_pull_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_pull_secrets ContainerInstancesContainerInstance#image_pull_secrets}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.timeouts"></a>

```python
timeouts: ContainerInstancesContainerInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeouts ContainerInstancesContainerInstance#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.volumes"></a>

```python
volumes: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volumes ContainerInstancesContainerInstance#volumes}

---

### ContainerInstancesContainerInstanceContainers <a name="ContainerInstancesContainerInstanceContainers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers(
  image_url: str,
  arguments: typing.List[str] = None,
  command: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  environment_variables: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  health_checks: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersHealthChecks]] = None,
  is_resource_principal_disabled: typing.Union[bool, IResolvable] = None,
  resource_config: ContainerInstancesContainerInstanceContainersResourceConfig = None,
  security_context: ContainerInstancesContainerInstanceContainersSecurityContext = None,
  volume_mounts: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersVolumeMounts]] = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.imageUrl">image_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.command">command</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.healthChecks">health_checks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>]]</code> | health_checks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.isResourcePrincipalDisabled">is_resource_principal_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.resourceConfig">resource_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | resource_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.securityContext">security_context</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | security_context block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.volumeMounts">volume_mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>]]</code> | volume_mounts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}. |

---

##### `image_url`<sup>Required</sup> <a name="image_url" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.imageUrl"></a>

```python
image_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}.

---

##### `command`<sup>Optional</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `health_checks`<sup>Optional</sup> <a name="health_checks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.healthChecks"></a>

```python
health_checks: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersHealthChecks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>]]

health_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_checks ContainerInstancesContainerInstance#health_checks}

---

##### `is_resource_principal_disabled`<sup>Optional</sup> <a name="is_resource_principal_disabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.isResourcePrincipalDisabled"></a>

```python
is_resource_principal_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}.

---

##### `resource_config`<sup>Optional</sup> <a name="resource_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.resourceConfig"></a>

```python
resource_config: ContainerInstancesContainerInstanceContainersResourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#resource_config ContainerInstancesContainerInstance#resource_config}

---

##### `security_context`<sup>Optional</sup> <a name="security_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.securityContext"></a>

```python
security_context: ContainerInstancesContainerInstanceContainersSecurityContext
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

security_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context ContainerInstancesContainerInstance#security_context}

---

##### `volume_mounts`<sup>Optional</sup> <a name="volume_mounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.volumeMounts"></a>

```python
volume_mounts: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>]]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_mounts ContainerInstancesContainerInstance#volume_mounts}

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}.

---

### ContainerInstancesContainerInstanceContainersHealthChecks <a name="ContainerInstancesContainerInstanceContainersHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks(
  health_check_type: str,
  command: typing.List[str] = None,
  failure_action: str = None,
  failure_threshold: typing.Union[int, float] = None,
  headers: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersHealthChecksHeaders]] = None,
  initial_delay_in_seconds: typing.Union[int, float] = None,
  interval_in_seconds: typing.Union[int, float] = None,
  name: str = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  status: str = None,
  status_details: str = None,
  success_threshold: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.healthCheckType">health_check_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.command">command</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureAction">failure_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>]]</code> | headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.initialDelayInSeconds">initial_delay_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.statusDetails">status_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}. |

---

##### `health_check_type`<sup>Required</sup> <a name="health_check_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}.

---

##### `command`<sup>Optional</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}.

---

##### `failure_action`<sup>Optional</sup> <a name="failure_action" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureAction"></a>

```python
failure_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}.

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersHealthChecksHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#headers ContainerInstancesContainerInstance#headers}

---

##### `initial_delay_in_seconds`<sup>Optional</sup> <a name="initial_delay_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.initialDelayInSeconds"></a>

```python
initial_delay_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}.

---

##### `interval_in_seconds`<sup>Optional</sup> <a name="interval_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}.

---

##### `status_details`<sup>Optional</sup> <a name="status_details" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.statusDetails"></a>

```python
status_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}.

---

##### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}.

---

### ContainerInstancesContainerInstanceContainersHealthChecksHeaders <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}.

---

### ContainerInstancesContainerInstanceContainersResourceConfig <a name="ContainerInstancesContainerInstanceContainersResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig(
  memory_limit_in_gbs: typing.Union[int, float] = None,
  vcpus_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.memoryLimitInGbs">memory_limit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.vcpusLimit">vcpus_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}. |

---

##### `memory_limit_in_gbs`<sup>Optional</sup> <a name="memory_limit_in_gbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.memoryLimitInGbs"></a>

```python
memory_limit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}.

---

##### `vcpus_limit`<sup>Optional</sup> <a name="vcpus_limit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.vcpusLimit"></a>

```python
vcpus_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}.

---

### ContainerInstancesContainerInstanceContainersSecurityContext <a name="ContainerInstancesContainerInstanceContainersSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext(
  capabilities: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities = None,
  is_non_root_user_check_enabled: typing.Union[bool, IResolvable] = None,
  is_root_file_system_readonly: typing.Union[bool, IResolvable] = None,
  run_as_group: typing.Union[int, float] = None,
  run_as_user: typing.Union[int, float] = None,
  security_context_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isNonRootUserCheckEnabled">is_non_root_user_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isRootFileSystemReadonly">is_root_file_system_readonly</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsGroup">run_as_group</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsUser">run_as_user</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.securityContextType">security_context_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}. |

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.capabilities"></a>

```python
capabilities: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#capabilities ContainerInstancesContainerInstance#capabilities}

---

##### `is_non_root_user_check_enabled`<sup>Optional</sup> <a name="is_non_root_user_check_enabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isNonRootUserCheckEnabled"></a>

```python
is_non_root_user_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}.

---

##### `is_root_file_system_readonly`<sup>Optional</sup> <a name="is_root_file_system_readonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isRootFileSystemReadonly"></a>

```python
is_root_file_system_readonly: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}.

---

##### `run_as_group`<sup>Optional</sup> <a name="run_as_group" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsGroup"></a>

```python
run_as_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}.

---

##### `run_as_user`<sup>Optional</sup> <a name="run_as_user" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsUser"></a>

```python
run_as_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}.

---

##### `security_context_type`<sup>Optional</sup> <a name="security_context_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.securityContextType"></a>

```python
security_context_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}.

---

### ContainerInstancesContainerInstanceContainersSecurityContextCapabilities <a name="ContainerInstancesContainerInstanceContainersSecurityContextCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities(
  add_capabilities: typing.List[str] = None,
  drop_capabilities: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.addCapabilities">add_capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.dropCapabilities">drop_capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}. |

---

##### `add_capabilities`<sup>Optional</sup> <a name="add_capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.addCapabilities"></a>

```python
add_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}.

---

##### `drop_capabilities`<sup>Optional</sup> <a name="drop_capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.dropCapabilities"></a>

```python
drop_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}.

---

### ContainerInstancesContainerInstanceContainersVolumeMounts <a name="ContainerInstancesContainerInstanceContainersVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts(
  mount_path: str,
  volume_name: str,
  is_read_only: typing.Union[bool, IResolvable] = None,
  partition: typing.Union[int, float] = None,
  sub_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.mountPath">mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.volumeName">volume_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.isReadOnly">is_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.subPath">sub_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}.

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}.

---

##### `is_read_only`<sup>Optional</sup> <a name="is_read_only" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.isReadOnly"></a>

```python
is_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}.

---

##### `sub_path`<sup>Optional</sup> <a name="sub_path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.subPath"></a>

```python
sub_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}.

---

### ContainerInstancesContainerInstanceDnsConfig <a name="ContainerInstancesContainerInstanceDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig(
  nameservers: typing.List[str] = None,
  options: typing.List[str] = None,
  searches: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.nameservers">nameservers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.options">options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.searches">searches</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}. |

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.nameservers"></a>

```python
nameservers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}.

---

##### `searches`<sup>Optional</sup> <a name="searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.searches"></a>

```python
searches: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}.

---

### ContainerInstancesContainerInstanceImagePullSecrets <a name="ContainerInstancesContainerInstanceImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets(
  registry_endpoint: str,
  secret_type: str,
  password: str = None,
  secret_id: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.registryEndpoint">registry_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretType">secret_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}. |

---

##### `registry_endpoint`<sup>Required</sup> <a name="registry_endpoint" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.registryEndpoint"></a>

```python
registry_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}.

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}.

---

### ContainerInstancesContainerInstanceShapeConfig <a name="ContainerInstancesContainerInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig(
  ocpus: typing.Union[int, float],
  memory_in_gbs: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}. |

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}.

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}.

---

### ContainerInstancesContainerInstanceTimeouts <a name="ContainerInstancesContainerInstanceTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}.

---

### ContainerInstancesContainerInstanceVnics <a name="ContainerInstancesContainerInstanceVnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics(
  subnet_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  is_public_ip_assigned: typing.Union[bool, IResolvable] = None,
  nsg_ids: typing.List[str] = None,
  private_ip: str = None,
  skip_source_dest_check: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.isPublicIpAssigned">is_public_ip_assigned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.skipSourceDestCheck">skip_source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}.

---

##### `is_public_ip_assigned`<sup>Optional</sup> <a name="is_public_ip_assigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.isPublicIpAssigned"></a>

```python
is_public_ip_assigned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}.

---

##### `skip_source_dest_check`<sup>Optional</sup> <a name="skip_source_dest_check" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.skipSourceDestCheck"></a>

```python
skip_source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}.

---

### ContainerInstancesContainerInstanceVolumes <a name="ContainerInstancesContainerInstanceVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes(
  name: str,
  volume_type: str,
  backing_store: str = None,
  configs: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumesConfigs]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.backingStore">backing_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.configs">configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>]]</code> | configs block. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}.

---

##### `backing_store`<sup>Optional</sup> <a name="backing_store" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.backingStore"></a>

```python
backing_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}.

---

##### `configs`<sup>Optional</sup> <a name="configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.configs"></a>

```python
configs: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumesConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>]]

configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#configs ContainerInstancesContainerInstance#configs}

---

### ContainerInstancesContainerInstanceVolumesConfigs <a name="ContainerInstancesContainerInstanceVolumesConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs(
  data: str = None,
  file_name: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.fileName">file_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}. |

---

##### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}.

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerInstancesContainerInstanceContainersHealthChecksHeadersList <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeadersList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersHealthChecksHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>]]

---


### ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerInstancesContainerInstanceContainersHealthChecksHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>]

---


### ContainerInstancesContainerInstanceContainersHealthChecksList <a name="ContainerInstancesContainerInstanceContainersHealthChecksList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerInstancesContainerInstanceContainersHealthChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersHealthChecks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>]]

---


### ContainerInstancesContainerInstanceContainersHealthChecksOutputReference <a name="ContainerInstancesContainerInstanceContainersHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureAction">reset_failure_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetInitialDelayInSeconds">reset_initial_delay_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetIntervalInSeconds">reset_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatusDetails">reset_status_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetSuccessThreshold">reset_success_threshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersHealthChecksHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>]]

---

##### `reset_command` <a name="reset_command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_failure_action` <a name="reset_failure_action" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureAction"></a>

```python
def reset_failure_action() -> None
```

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_headers` <a name="reset_headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_initial_delay_in_seconds` <a name="reset_initial_delay_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetInitialDelayInSeconds"></a>

```python
def reset_initial_delay_in_seconds() -> None
```

##### `reset_interval_in_seconds` <a name="reset_interval_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetIntervalInSeconds"></a>

```python
def reset_interval_in_seconds() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_status_details` <a name="reset_status_details" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatusDetails"></a>

```python
def reset_status_details() -> None
```

##### `reset_success_threshold` <a name="reset_success_threshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetSuccessThreshold"></a>

```python
def reset_success_threshold() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList">ContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureActionInput">failure_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckTypeInput">health_check_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSecondsInput">initial_delay_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSecondsInput">interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetailsInput">status_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThresholdInput">success_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction">failure_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType">health_check_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds">initial_delay_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails">status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers"></a>

```python
headers: ContainerInstancesContainerInstanceContainersHealthChecksHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList">ContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a>

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_action_input`<sup>Optional</sup> <a name="failure_action_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureActionInput"></a>

```python
failure_action_input: str
```

- *Type:* str

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersHealthChecksHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>]]

---

##### `health_check_type_input`<sup>Optional</sup> <a name="health_check_type_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckTypeInput"></a>

```python
health_check_type_input: str
```

- *Type:* str

---

##### `initial_delay_in_seconds_input`<sup>Optional</sup> <a name="initial_delay_in_seconds_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSecondsInput"></a>

```python
initial_delay_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_in_seconds_input`<sup>Optional</sup> <a name="interval_in_seconds_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSecondsInput"></a>

```python
interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_details_input`<sup>Optional</sup> <a name="status_details_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetailsInput"></a>

```python
status_details_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `success_threshold_input`<sup>Optional</sup> <a name="success_threshold_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThresholdInput"></a>

```python
success_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_action`<sup>Required</sup> <a name="failure_action" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction"></a>

```python
failure_action: str
```

- *Type:* str

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_type`<sup>Required</sup> <a name="health_check_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

---

##### `initial_delay_in_seconds`<sup>Required</sup> <a name="initial_delay_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds"></a>

```python
initial_delay_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_details`<sup>Required</sup> <a name="status_details" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails"></a>

```python
status_details: str
```

- *Type:* str

---

##### `success_threshold`<sup>Required</sup> <a name="success_threshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerInstancesContainerInstanceContainersHealthChecks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>]

---


### ContainerInstancesContainerInstanceContainersList <a name="ContainerInstancesContainerInstanceContainersList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerInstancesContainerInstanceContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]]

---


### ContainerInstancesContainerInstanceContainersOutputReference <a name="ContainerInstancesContainerInstanceContainersOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks">put_health_checks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig">put_resource_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext">put_security_context</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts">put_volume_mounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetHealthChecks">reset_health_checks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetIsResourcePrincipalDisabled">reset_is_resource_principal_disabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetResourceConfig">reset_resource_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetSecurityContext">reset_security_context</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetVolumeMounts">reset_volume_mounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_checks` <a name="put_health_checks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks"></a>

```python
def put_health_checks(
  value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersHealthChecks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>]]

---

##### `put_resource_config` <a name="put_resource_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig"></a>

```python
def put_resource_config(
  memory_limit_in_gbs: typing.Union[int, float] = None,
  vcpus_limit: typing.Union[int, float] = None
) -> None
```

###### `memory_limit_in_gbs`<sup>Optional</sup> <a name="memory_limit_in_gbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig.parameter.memoryLimitInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}.

---

###### `vcpus_limit`<sup>Optional</sup> <a name="vcpus_limit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig.parameter.vcpusLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}.

---

##### `put_security_context` <a name="put_security_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext"></a>

```python
def put_security_context(
  capabilities: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities = None,
  is_non_root_user_check_enabled: typing.Union[bool, IResolvable] = None,
  is_root_file_system_readonly: typing.Union[bool, IResolvable] = None,
  run_as_group: typing.Union[int, float] = None,
  run_as_user: typing.Union[int, float] = None,
  security_context_type: str = None
) -> None
```

###### `capabilities`<sup>Optional</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext.parameter.capabilities"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#capabilities ContainerInstancesContainerInstance#capabilities}

---

###### `is_non_root_user_check_enabled`<sup>Optional</sup> <a name="is_non_root_user_check_enabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext.parameter.isNonRootUserCheckEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}.

---

###### `is_root_file_system_readonly`<sup>Optional</sup> <a name="is_root_file_system_readonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext.parameter.isRootFileSystemReadonly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}.

---

###### `run_as_group`<sup>Optional</sup> <a name="run_as_group" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext.parameter.runAsGroup"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}.

---

###### `run_as_user`<sup>Optional</sup> <a name="run_as_user" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext.parameter.runAsUser"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}.

---

###### `security_context_type`<sup>Optional</sup> <a name="security_context_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext.parameter.securityContextType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}.

---

##### `put_volume_mounts` <a name="put_volume_mounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts"></a>

```python
def put_volume_mounts(
  value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersVolumeMounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>]]

---

##### `reset_arguments` <a name="reset_arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_command` <a name="reset_command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_health_checks` <a name="reset_health_checks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetHealthChecks"></a>

```python
def reset_health_checks() -> None
```

##### `reset_is_resource_principal_disabled` <a name="reset_is_resource_principal_disabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetIsResourcePrincipalDisabled"></a>

```python
def reset_is_resource_principal_disabled() -> None
```

##### `reset_resource_config` <a name="reset_resource_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetResourceConfig"></a>

```python
def reset_resource_config() -> None
```

##### `reset_security_context` <a name="reset_security_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetSecurityContext"></a>

```python
def reset_security_context() -> None
```

##### `reset_volume_mounts` <a name="reset_volume_mounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetVolumeMounts"></a>

```python
def reset_volume_mounts() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerId">container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId">container_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.exitCode">exit_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks">health_checks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList">ContainerInstancesContainerInstanceContainersHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig">resource_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference">ContainerInstancesContainerInstanceContainersResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContext">security_context</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated">time_terminated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList">ContainerInstancesContainerInstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.argumentsInput">arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecksInput">health_checks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrlInput">image_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabledInput">is_resource_principal_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfigInput">resource_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContextInput">security_context_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMountsInput">volume_mounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl">image_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled">is_resource_principal_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

---

##### `container_instance_id`<sup>Required</sup> <a name="container_instance_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId"></a>

```python
container_instance_id: str
```

- *Type:* str

---

##### `exit_code`<sup>Required</sup> <a name="exit_code" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.exitCode"></a>

```python
exit_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `health_checks`<sup>Required</sup> <a name="health_checks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks"></a>

```python
health_checks: ContainerInstancesContainerInstanceContainersHealthChecksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList">ContainerInstancesContainerInstanceContainersHealthChecksList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `resource_config`<sup>Required</sup> <a name="resource_config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig"></a>

```python
resource_config: ContainerInstancesContainerInstanceContainersResourceConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference">ContainerInstancesContainerInstanceContainersResourceConfigOutputReference</a>

---

##### `security_context`<sup>Required</sup> <a name="security_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContext"></a>

```python
security_context: ContainerInstancesContainerInstanceContainersSecurityContextOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_terminated`<sup>Required</sup> <a name="time_terminated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated"></a>

```python
time_terminated: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts"></a>

```python
volume_mounts: ContainerInstancesContainerInstanceContainersVolumeMountsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList">ContainerInstancesContainerInstanceContainersVolumeMountsList</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.argumentsInput"></a>

```python
arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `health_checks_input`<sup>Optional</sup> <a name="health_checks_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecksInput"></a>

```python
health_checks_input: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersHealthChecks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>]]

---

##### `image_url_input`<sup>Optional</sup> <a name="image_url_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrlInput"></a>

```python
image_url_input: str
```

- *Type:* str

---

##### `is_resource_principal_disabled_input`<sup>Optional</sup> <a name="is_resource_principal_disabled_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabledInput"></a>

```python
is_resource_principal_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_config_input`<sup>Optional</sup> <a name="resource_config_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfigInput"></a>

```python
resource_config_input: ContainerInstancesContainerInstanceContainersResourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---

##### `security_context_input`<sup>Optional</sup> <a name="security_context_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContextInput"></a>

```python
security_context_input: ContainerInstancesContainerInstanceContainersSecurityContext
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---

##### `volume_mounts_input`<sup>Optional</sup> <a name="volume_mounts_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMountsInput"></a>

```python
volume_mounts_input: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>]]

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_url`<sup>Required</sup> <a name="image_url" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl"></a>

```python
image_url: str
```

- *Type:* str

---

##### `is_resource_principal_disabled`<sup>Required</sup> <a name="is_resource_principal_disabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled"></a>

```python
is_resource_principal_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerInstancesContainerInstanceContainers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>]

---


### ContainerInstancesContainerInstanceContainersResourceConfigOutputReference <a name="ContainerInstancesContainerInstanceContainersResourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetMemoryLimitInGbs">reset_memory_limit_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetVcpusLimit">reset_vcpus_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_limit_in_gbs` <a name="reset_memory_limit_in_gbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetMemoryLimitInGbs"></a>

```python
def reset_memory_limit_in_gbs() -> None
```

##### `reset_vcpus_limit` <a name="reset_vcpus_limit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetVcpusLimit"></a>

```python
def reset_vcpus_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbsInput">memory_limit_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimitInput">vcpus_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs">memory_limit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit">vcpus_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_limit_in_gbs_input`<sup>Optional</sup> <a name="memory_limit_in_gbs_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbsInput"></a>

```python
memory_limit_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpus_limit_input`<sup>Optional</sup> <a name="vcpus_limit_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimitInput"></a>

```python
vcpus_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_limit_in_gbs`<sup>Required</sup> <a name="memory_limit_in_gbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs"></a>

```python
memory_limit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpus_limit`<sup>Required</sup> <a name="vcpus_limit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit"></a>

```python
vcpus_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerInstancesContainerInstanceContainersResourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---


### ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference <a name="ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetAddCapabilities">reset_add_capabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetDropCapabilities">reset_drop_capabilities</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add_capabilities` <a name="reset_add_capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetAddCapabilities"></a>

```python
def reset_add_capabilities() -> None
```

##### `reset_drop_capabilities` <a name="reset_drop_capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetDropCapabilities"></a>

```python
def reset_drop_capabilities() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilitiesInput">add_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilitiesInput">drop_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities">add_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities">drop_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_capabilities_input`<sup>Optional</sup> <a name="add_capabilities_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilitiesInput"></a>

```python
add_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drop_capabilities_input`<sup>Optional</sup> <a name="drop_capabilities_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilitiesInput"></a>

```python
drop_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `add_capabilities`<sup>Required</sup> <a name="add_capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities"></a>

```python
add_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drop_capabilities`<sup>Required</sup> <a name="drop_capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities"></a>

```python
drop_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---


### ContainerInstancesContainerInstanceContainersSecurityContextOutputReference <a name="ContainerInstancesContainerInstanceContainersSecurityContextOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities">put_capabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsNonRootUserCheckEnabled">reset_is_non_root_user_check_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsRootFileSystemReadonly">reset_is_root_file_system_readonly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsGroup">reset_run_as_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsUser">reset_run_as_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetSecurityContextType">reset_security_context_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capabilities` <a name="put_capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities"></a>

```python
def put_capabilities(
  add_capabilities: typing.List[str] = None,
  drop_capabilities: typing.List[str] = None
) -> None
```

###### `add_capabilities`<sup>Optional</sup> <a name="add_capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities.parameter.addCapabilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}.

---

###### `drop_capabilities`<sup>Optional</sup> <a name="drop_capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities.parameter.dropCapabilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}.

---

##### `reset_capabilities` <a name="reset_capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_is_non_root_user_check_enabled` <a name="reset_is_non_root_user_check_enabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsNonRootUserCheckEnabled"></a>

```python
def reset_is_non_root_user_check_enabled() -> None
```

##### `reset_is_root_file_system_readonly` <a name="reset_is_root_file_system_readonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsRootFileSystemReadonly"></a>

```python
def reset_is_root_file_system_readonly() -> None
```

##### `reset_run_as_group` <a name="reset_run_as_group" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsGroup"></a>

```python
def reset_run_as_group() -> None
```

##### `reset_run_as_user` <a name="reset_run_as_user" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsUser"></a>

```python
def reset_run_as_user() -> None
```

##### `reset_security_context_type` <a name="reset_security_context_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetSecurityContextType"></a>

```python
def reset_security_context_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilitiesInput">capabilities_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabledInput">is_non_root_user_check_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonlyInput">is_root_file_system_readonly_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroupInput">run_as_group_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUserInput">run_as_user_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextTypeInput">security_context_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled">is_non_root_user_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly">is_root_file_system_readonly</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup">run_as_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser">run_as_user</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType">security_context_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities"></a>

```python
capabilities: ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference</a>

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilitiesInput"></a>

```python
capabilities_input: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---

##### `is_non_root_user_check_enabled_input`<sup>Optional</sup> <a name="is_non_root_user_check_enabled_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabledInput"></a>

```python
is_non_root_user_check_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_root_file_system_readonly_input`<sup>Optional</sup> <a name="is_root_file_system_readonly_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonlyInput"></a>

```python
is_root_file_system_readonly_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_as_group_input`<sup>Optional</sup> <a name="run_as_group_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroupInput"></a>

```python
run_as_group_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_as_user_input`<sup>Optional</sup> <a name="run_as_user_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUserInput"></a>

```python
run_as_user_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_context_type_input`<sup>Optional</sup> <a name="security_context_type_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextTypeInput"></a>

```python
security_context_type_input: str
```

- *Type:* str

---

##### `is_non_root_user_check_enabled`<sup>Required</sup> <a name="is_non_root_user_check_enabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled"></a>

```python
is_non_root_user_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_root_file_system_readonly`<sup>Required</sup> <a name="is_root_file_system_readonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly"></a>

```python
is_root_file_system_readonly: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_as_group`<sup>Required</sup> <a name="run_as_group" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup"></a>

```python
run_as_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser"></a>

```python
run_as_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_context_type`<sup>Required</sup> <a name="security_context_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType"></a>

```python
security_context_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue"></a>

```python
internal_value: ContainerInstancesContainerInstanceContainersSecurityContext
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---


### ContainerInstancesContainerInstanceContainersVolumeMountsList <a name="ContainerInstancesContainerInstanceContainersVolumeMountsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceContainersVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>]]

---


### ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference <a name="ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetIsReadOnly">reset_is_read_only</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetSubPath">reset_sub_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_read_only` <a name="reset_is_read_only" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetIsReadOnly"></a>

```python
def reset_is_read_only() -> None
```

##### `reset_partition` <a name="reset_partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_sub_path` <a name="reset_sub_path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```python
def reset_sub_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnlyInput">is_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partitionInput">partition_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPathInput">sub_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly">is_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath">sub_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_read_only_input`<sup>Optional</sup> <a name="is_read_only_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnlyInput"></a>

```python
is_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partitionInput"></a>

```python
partition_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_path_input`<sup>Optional</sup> <a name="sub_path_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```python
sub_path_input: str
```

- *Type:* str

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `is_read_only`<sup>Required</sup> <a name="is_read_only" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly"></a>

```python
is_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_path`<sup>Required</sup> <a name="sub_path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```python
sub_path: str
```

- *Type:* str

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerInstancesContainerInstanceContainersVolumeMounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>]

---


### ContainerInstancesContainerInstanceDnsConfigOutputReference <a name="ContainerInstancesContainerInstanceDnsConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetNameservers">reset_nameservers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetSearches">reset_searches</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nameservers` <a name="reset_nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetNameservers"></a>

```python
def reset_nameservers() -> None
```

##### `reset_options` <a name="reset_options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_searches` <a name="reset_searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetSearches"></a>

```python
def reset_searches() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameserversInput">nameservers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.optionsInput">options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searchesInput">searches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches">searches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nameservers_input`<sup>Optional</sup> <a name="nameservers_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameserversInput"></a>

```python
nameservers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.optionsInput"></a>

```python
options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `searches_input`<sup>Optional</sup> <a name="searches_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searchesInput"></a>

```python
searches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers"></a>

```python
nameservers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `searches`<sup>Required</sup> <a name="searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches"></a>

```python
searches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerInstancesContainerInstanceDnsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---


### ContainerInstancesContainerInstanceImagePullSecretsList <a name="ContainerInstancesContainerInstanceImagePullSecretsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerInstancesContainerInstanceImagePullSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceImagePullSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]]

---


### ContainerInstancesContainerInstanceImagePullSecretsOutputReference <a name="ContainerInstancesContainerInstanceImagePullSecretsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_username` <a name="reset_username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpointInput">registry_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretTypeInput">secret_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint">registry_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `registry_endpoint_input`<sup>Optional</sup> <a name="registry_endpoint_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpointInput"></a>

```python
registry_endpoint_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_type_input`<sup>Optional</sup> <a name="secret_type_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretTypeInput"></a>

```python
secret_type_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `registry_endpoint`<sup>Required</sup> <a name="registry_endpoint" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint"></a>

```python
registry_endpoint: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerInstancesContainerInstanceImagePullSecrets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>]

---


### ContainerInstancesContainerInstanceShapeConfigOutputReference <a name="ContainerInstancesContainerInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">networking_bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription">processor_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `networking_bandwidth_in_gbps`<sup>Required</sup> <a name="networking_bandwidth_in_gbps" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```python
networking_bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor_description`<sup>Required</sup> <a name="processor_description" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription"></a>

```python
processor_description: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerInstancesContainerInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---


### ContainerInstancesContainerInstanceTimeoutsOutputReference <a name="ContainerInstancesContainerInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerInstancesContainerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>]

---


### ContainerInstancesContainerInstanceVnicsList <a name="ContainerInstancesContainerInstanceVnicsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerInstancesContainerInstanceVnicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVnics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]]

---


### ContainerInstancesContainerInstanceVnicsOutputReference <a name="ContainerInstancesContainerInstanceVnicsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetHostnameLabel">reset_hostname_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetIsPublicIpAssigned">reset_is_public_ip_assigned</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetSkipSourceDestCheck">reset_skip_source_dest_check</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_hostname_label` <a name="reset_hostname_label" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetHostnameLabel"></a>

```python
def reset_hostname_label() -> None
```

##### `reset_is_public_ip_assigned` <a name="reset_is_public_ip_assigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetIsPublicIpAssigned"></a>

```python
def reset_is_public_ip_assigned() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_skip_source_dest_check` <a name="reset_skip_source_dest_check" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetSkipSourceDestCheck"></a>

```python
def reset_skip_source_dest_check() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabelInput">hostname_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssignedInput">is_public_ip_assigned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheckInput">skip_source_dest_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned">is_public_ip_assigned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck">skip_source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label_input`<sup>Optional</sup> <a name="hostname_label_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabelInput"></a>

```python
hostname_label_input: str
```

- *Type:* str

---

##### `is_public_ip_assigned_input`<sup>Optional</sup> <a name="is_public_ip_assigned_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssignedInput"></a>

```python
is_public_ip_assigned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `skip_source_dest_check_input`<sup>Optional</sup> <a name="skip_source_dest_check_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheckInput"></a>

```python
skip_source_dest_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label`<sup>Required</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

---

##### `is_public_ip_assigned`<sup>Required</sup> <a name="is_public_ip_assigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned"></a>

```python
is_public_ip_assigned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `skip_source_dest_check`<sup>Required</sup> <a name="skip_source_dest_check" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck"></a>

```python
skip_source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerInstancesContainerInstanceVnics]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>]

---


### ContainerInstancesContainerInstanceVolumesConfigsList <a name="ContainerInstancesContainerInstanceVolumesConfigsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerInstancesContainerInstanceVolumesConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumesConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>]]

---


### ContainerInstancesContainerInstanceVolumesConfigsOutputReference <a name="ContainerInstancesContainerInstanceVolumesConfigsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data` <a name="reset_data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_file_name` <a name="reset_file_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerInstancesContainerInstanceVolumesConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>]

---


### ContainerInstancesContainerInstanceVolumesList <a name="ContainerInstancesContainerInstanceVolumesList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerInstancesContainerInstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]]

---


### ContainerInstancesContainerInstanceVolumesOutputReference <a name="ContainerInstancesContainerInstanceVolumesOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import container_instances_container_instance

containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs">put_configs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetBackingStore">reset_backing_store</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetConfigs">reset_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configs` <a name="put_configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs"></a>

```python
def put_configs(
  value: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumesConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>]]

---

##### `reset_backing_store` <a name="reset_backing_store" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetBackingStore"></a>

```python
def reset_backing_store() -> None
```

##### `reset_configs` <a name="reset_configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetConfigs"></a>

```python
def reset_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configs">configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList">ContainerInstancesContainerInstanceVolumesConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStoreInput">backing_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configsInput">configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore">backing_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configs`<sup>Required</sup> <a name="configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configs"></a>

```python
configs: ContainerInstancesContainerInstanceVolumesConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList">ContainerInstancesContainerInstanceVolumesConfigsList</a>

---

##### `backing_store_input`<sup>Optional</sup> <a name="backing_store_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStoreInput"></a>

```python
backing_store_input: str
```

- *Type:* str

---

##### `configs_input`<sup>Optional</sup> <a name="configs_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configsInput"></a>

```python
configs_input: typing.Union[IResolvable, typing.List[ContainerInstancesContainerInstanceVolumesConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `backing_store`<sup>Required</sup> <a name="backing_store" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore"></a>

```python
backing_store: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerInstancesContainerInstanceVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>]

---



