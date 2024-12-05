# `containerInstancesContainerInstance` Submodule <a name="`containerInstancesContainerInstance` Submodule" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerInstancesContainerInstance <a name="ContainerInstancesContainerInstance" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance oci_container_instances_container_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstance;

ContainerInstancesContainerInstance.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
    .containers(IResolvable)
    .containers(java.util.List<ContainerInstancesContainerInstanceContainers>)
    .shape(java.lang.String)
    .shapeConfig(ContainerInstancesContainerInstanceShapeConfig)
    .vnics(IResolvable)
    .vnics(java.util.List<ContainerInstancesContainerInstanceVnics>)
//  .containerRestartPolicy(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .dnsConfig(ContainerInstancesContainerInstanceDnsConfig)
//  .faultDomain(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .gracefulShutdownTimeoutInSeconds(java.lang.String)
//  .id(java.lang.String)
//  .imagePullSecrets(IResolvable)
//  .imagePullSecrets(java.util.List<ContainerInstancesContainerInstanceImagePullSecrets>)
//  .state(java.lang.String)
//  .timeouts(ContainerInstancesContainerInstanceTimeouts)
//  .volumes(IResolvable)
//  .volumes(java.util.List<ContainerInstancesContainerInstanceVolumes>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.containers">containers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>></code> | containers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.vnics">vnics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>></code> | vnics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.containerRestartPolicy">containerRestartPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.dnsConfig">dnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | dns_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.gracefulShutdownTimeoutInSeconds">gracefulShutdownTimeoutInSeconds</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.imagePullSecrets">imagePullSecrets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>></code> | image_pull_secrets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.volumes">volumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>></code> | volumes block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}.

---

##### `containers`<sup>Required</sup> <a name="containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.containers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#containers ContainerInstancesContainerInstance#containers}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}.

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape_config ContainerInstancesContainerInstance#shape_config}

---

##### `vnics`<sup>Required</sup> <a name="vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.vnics"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>>

vnics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vnics ContainerInstancesContainerInstance#vnics}

---

##### `containerRestartPolicy`<sup>Optional</sup> <a name="containerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.containerRestartPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `dnsConfig`<sup>Optional</sup> <a name="dnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.dnsConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#dns_config ContainerInstancesContainerInstance#dns_config}

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.faultDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `gracefulShutdownTimeoutInSeconds`<sup>Optional</sup> <a name="gracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.gracefulShutdownTimeoutInSeconds"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imagePullSecrets`<sup>Optional</sup> <a name="imagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.imagePullSecrets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>>

image_pull_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_pull_secrets ContainerInstancesContainerInstance#image_pull_secrets}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeouts ContainerInstancesContainerInstance#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.volumes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volumes ContainerInstancesContainerInstance#volumes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig">putDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets">putImagePullSecrets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig">putShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics">putVnics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetContainerRestartPolicy">resetContainerRestartPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDnsConfig">resetDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetGracefulShutdownTimeoutInSeconds">resetGracefulShutdownTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetImagePullSecrets">resetImagePullSecrets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainers` <a name="putContainers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers"></a>

```java
public void putContainers(IResolvable OR java.util.List<ContainerInstancesContainerInstanceContainers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>>

---

##### `putDnsConfig` <a name="putDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig"></a>

```java
public void putDnsConfig(ContainerInstancesContainerInstanceDnsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---

##### `putImagePullSecrets` <a name="putImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets"></a>

```java
public void putImagePullSecrets(IResolvable OR java.util.List<ContainerInstancesContainerInstanceImagePullSecrets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>>

---

##### `putShapeConfig` <a name="putShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig"></a>

```java
public void putShapeConfig(ContainerInstancesContainerInstanceShapeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts"></a>

```java
public void putTimeouts(ContainerInstancesContainerInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

---

##### `putVnics` <a name="putVnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics"></a>

```java
public void putVnics(IResolvable OR java.util.List<ContainerInstancesContainerInstanceVnics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>>

---

##### `putVolumes` <a name="putVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes"></a>

```java
public void putVolumes(IResolvable OR java.util.List<ContainerInstancesContainerInstanceVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>>

---

##### `resetContainerRestartPolicy` <a name="resetContainerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetContainerRestartPolicy"></a>

```java
public void resetContainerRestartPolicy()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDnsConfig` <a name="resetDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDnsConfig"></a>

```java
public void resetDnsConfig()
```

##### `resetFaultDomain` <a name="resetFaultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFaultDomain"></a>

```java
public void resetFaultDomain()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetGracefulShutdownTimeoutInSeconds` <a name="resetGracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetGracefulShutdownTimeoutInSeconds"></a>

```java
public void resetGracefulShutdownTimeoutInSeconds()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetId"></a>

```java
public void resetId()
```

##### `resetImagePullSecrets` <a name="resetImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetImagePullSecrets"></a>

```java
public void resetImagePullSecrets()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVolumes` <a name="resetVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetVolumes"></a>

```java
public void resetVolumes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstance;

ContainerInstancesContainerInstance.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstance;

ContainerInstancesContainerInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstance;

ContainerInstancesContainerInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstance;

ContainerInstancesContainerInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerInstancesContainerInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerInstancesContainerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerInstancesContainerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerInstancesContainerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerCount">containerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containers">containers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList">ContainerInstancesContainerInstanceContainersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfig">dnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference">ContainerInstancesContainerInstanceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecrets">imagePullSecrets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList">ContainerInstancesContainerInstanceImagePullSecretsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference">ContainerInstancesContainerInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference">ContainerInstancesContainerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnics">vnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList">ContainerInstancesContainerInstanceVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumeCount">volumeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList">ContainerInstancesContainerInstanceVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicyInput">containerRestartPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containersInput">containersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfigInput">dnsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomainInput">faultDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSecondsInput">gracefulShutdownTimeoutInSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecretsInput">imagePullSecretsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfigInput">shapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnicsInput">vnicsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumesInput">volumesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicy">containerRestartPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds">gracefulShutdownTimeoutInSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerCount`<sup>Required</sup> <a name="containerCount" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerCount"></a>

```java
public java.lang.Number getContainerCount();
```

- *Type:* java.lang.Number

---

##### `containers`<sup>Required</sup> <a name="containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containers"></a>

```java
public ContainerInstancesContainerInstanceContainersList getContainers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList">ContainerInstancesContainerInstanceContainersList</a>

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfig"></a>

```java
public ContainerInstancesContainerInstanceDnsConfigOutputReference getDnsConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference">ContainerInstancesContainerInstanceDnsConfigOutputReference</a>

---

##### `imagePullSecrets`<sup>Required</sup> <a name="imagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecrets"></a>

```java
public ContainerInstancesContainerInstanceImagePullSecretsList getImagePullSecrets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList">ContainerInstancesContainerInstanceImagePullSecretsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfig"></a>

```java
public ContainerInstancesContainerInstanceShapeConfigOutputReference getShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference">ContainerInstancesContainerInstanceShapeConfigOutputReference</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeouts"></a>

```java
public ContainerInstancesContainerInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference">ContainerInstancesContainerInstanceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `vnics`<sup>Required</sup> <a name="vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnics"></a>

```java
public ContainerInstancesContainerInstanceVnicsList getVnics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList">ContainerInstancesContainerInstanceVnicsList</a>

---

##### `volumeCount`<sup>Required</sup> <a name="volumeCount" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumeCount"></a>

```java
public java.lang.Number getVolumeCount();
```

- *Type:* java.lang.Number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumes"></a>

```java
public ContainerInstancesContainerInstanceVolumesList getVolumes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList">ContainerInstancesContainerInstanceVolumesList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `containerRestartPolicyInput`<sup>Optional</sup> <a name="containerRestartPolicyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicyInput"></a>

```java
public java.lang.String getContainerRestartPolicyInput();
```

- *Type:* java.lang.String

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containersInput"></a>

```java
public java.lang.Object getContainersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dnsConfigInput`<sup>Optional</sup> <a name="dnsConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfigInput"></a>

```java
public ContainerInstancesContainerInstanceDnsConfig getDnsConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomainInput"></a>

```java
public java.lang.String getFaultDomainInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gracefulShutdownTimeoutInSecondsInput`<sup>Optional</sup> <a name="gracefulShutdownTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSecondsInput"></a>

```java
public java.lang.String getGracefulShutdownTimeoutInSecondsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imagePullSecretsInput`<sup>Optional</sup> <a name="imagePullSecretsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecretsInput"></a>

```java
public java.lang.Object getImagePullSecretsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>>

---

##### `shapeConfigInput`<sup>Optional</sup> <a name="shapeConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfigInput"></a>

```java
public ContainerInstancesContainerInstanceShapeConfig getShapeConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

---

##### `vnicsInput`<sup>Optional</sup> <a name="vnicsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnicsInput"></a>

```java
public java.lang.Object getVnicsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>>

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumesInput"></a>

```java
public java.lang.Object getVolumesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `containerRestartPolicy`<sup>Required</sup> <a name="containerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicy"></a>

```java
public java.lang.String getContainerRestartPolicy();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gracefulShutdownTimeoutInSeconds`<sup>Required</sup> <a name="gracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds"></a>

```java
public java.lang.String getGracefulShutdownTimeoutInSeconds();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerInstancesContainerInstanceConfig <a name="ContainerInstancesContainerInstanceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceConfig;

ContainerInstancesContainerInstanceConfig.builder()
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
    .containers(IResolvable)
    .containers(java.util.List<ContainerInstancesContainerInstanceContainers>)
    .shape(java.lang.String)
    .shapeConfig(ContainerInstancesContainerInstanceShapeConfig)
    .vnics(IResolvable)
    .vnics(java.util.List<ContainerInstancesContainerInstanceVnics>)
//  .containerRestartPolicy(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .dnsConfig(ContainerInstancesContainerInstanceDnsConfig)
//  .faultDomain(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .gracefulShutdownTimeoutInSeconds(java.lang.String)
//  .id(java.lang.String)
//  .imagePullSecrets(IResolvable)
//  .imagePullSecrets(java.util.List<ContainerInstancesContainerInstanceImagePullSecrets>)
//  .state(java.lang.String)
//  .timeouts(ContainerInstancesContainerInstanceTimeouts)
//  .volumes(IResolvable)
//  .volumes(java.util.List<ContainerInstancesContainerInstanceVolumes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containers">containers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>></code> | containers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.vnics">vnics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>></code> | vnics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containerRestartPolicy">containerRestartPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dnsConfig">dnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | dns_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.gracefulShutdownTimeoutInSeconds">gracefulShutdownTimeoutInSeconds</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.imagePullSecrets">imagePullSecrets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>></code> | image_pull_secrets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.volumes">volumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>></code> | volumes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}.

---

##### `containers`<sup>Required</sup> <a name="containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containers"></a>

```java
public java.lang.Object getContainers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#containers ContainerInstancesContainerInstance#containers}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}.

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shapeConfig"></a>

```java
public ContainerInstancesContainerInstanceShapeConfig getShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape_config ContainerInstancesContainerInstance#shape_config}

---

##### `vnics`<sup>Required</sup> <a name="vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.vnics"></a>

```java
public java.lang.Object getVnics();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>>

vnics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vnics ContainerInstancesContainerInstance#vnics}

---

##### `containerRestartPolicy`<sup>Optional</sup> <a name="containerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containerRestartPolicy"></a>

```java
public java.lang.String getContainerRestartPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `dnsConfig`<sup>Optional</sup> <a name="dnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dnsConfig"></a>

```java
public ContainerInstancesContainerInstanceDnsConfig getDnsConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#dns_config ContainerInstancesContainerInstance#dns_config}

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `gracefulShutdownTimeoutInSeconds`<sup>Optional</sup> <a name="gracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.gracefulShutdownTimeoutInSeconds"></a>

```java
public java.lang.String getGracefulShutdownTimeoutInSeconds();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imagePullSecrets`<sup>Optional</sup> <a name="imagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.imagePullSecrets"></a>

```java
public java.lang.Object getImagePullSecrets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>>

image_pull_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_pull_secrets ContainerInstancesContainerInstance#image_pull_secrets}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.timeouts"></a>

```java
public ContainerInstancesContainerInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeouts ContainerInstancesContainerInstance#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.volumes"></a>

```java
public java.lang.Object getVolumes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volumes ContainerInstancesContainerInstance#volumes}

---

### ContainerInstancesContainerInstanceContainers <a name="ContainerInstancesContainerInstanceContainers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainers;

ContainerInstancesContainerInstanceContainers.builder()
    .imageUrl(java.lang.String)
//  .arguments(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .healthChecks(IResolvable)
//  .healthChecks(java.util.List<ContainerInstancesContainerInstanceContainersHealthChecks>)
//  .isResourcePrincipalDisabled(java.lang.Boolean)
//  .isResourcePrincipalDisabled(IResolvable)
//  .resourceConfig(ContainerInstancesContainerInstanceContainersResourceConfig)
//  .securityContext(ContainerInstancesContainerInstanceContainersSecurityContext)
//  .volumeMounts(IResolvable)
//  .volumeMounts(java.util.List<ContainerInstancesContainerInstanceContainersVolumeMounts>)
//  .workingDirectory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.imageUrl">imageUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.healthChecks">healthChecks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>></code> | health_checks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.isResourcePrincipalDisabled">isResourcePrincipalDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.resourceConfig">resourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | resource_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.securityContext">securityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | security_context block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.volumeMounts">volumeMounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>></code> | volume_mounts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}. |

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.imageUrl"></a>

```java
public java.lang.String getImageUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}.

---

##### `command`<sup>Optional</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `healthChecks`<sup>Optional</sup> <a name="healthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.healthChecks"></a>

```java
public java.lang.Object getHealthChecks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>>

health_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_checks ContainerInstancesContainerInstance#health_checks}

---

##### `isResourcePrincipalDisabled`<sup>Optional</sup> <a name="isResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.isResourcePrincipalDisabled"></a>

```java
public java.lang.Object getIsResourcePrincipalDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}.

---

##### `resourceConfig`<sup>Optional</sup> <a name="resourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.resourceConfig"></a>

```java
public ContainerInstancesContainerInstanceContainersResourceConfig getResourceConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#resource_config ContainerInstancesContainerInstance#resource_config}

---

##### `securityContext`<sup>Optional</sup> <a name="securityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.securityContext"></a>

```java
public ContainerInstancesContainerInstanceContainersSecurityContext getSecurityContext();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

security_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context ContainerInstancesContainerInstance#security_context}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.volumeMounts"></a>

```java
public java.lang.Object getVolumeMounts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>>

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_mounts ContainerInstancesContainerInstance#volume_mounts}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}.

---

### ContainerInstancesContainerInstanceContainersHealthChecks <a name="ContainerInstancesContainerInstanceContainersHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersHealthChecks;

ContainerInstancesContainerInstanceContainersHealthChecks.builder()
    .healthCheckType(java.lang.String)
//  .command(java.util.List<java.lang.String>)
//  .failureAction(java.lang.String)
//  .failureThreshold(java.lang.Number)
//  .headers(IResolvable)
//  .headers(java.util.List<ContainerInstancesContainerInstanceContainersHealthChecksHeaders>)
//  .initialDelayInSeconds(java.lang.Number)
//  .intervalInSeconds(java.lang.Number)
//  .name(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .status(java.lang.String)
//  .statusDetails(java.lang.String)
//  .successThreshold(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureAction">failureAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>></code> | headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.initialDelayInSeconds">initialDelayInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.statusDetails">statusDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.successThreshold">successThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}. |

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}.

---

##### `command`<sup>Optional</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}.

---

##### `failureAction`<sup>Optional</sup> <a name="failureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureAction"></a>

```java
public java.lang.String getFailureAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#headers ContainerInstancesContainerInstance#headers}

---

##### `initialDelayInSeconds`<sup>Optional</sup> <a name="initialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.initialDelayInSeconds"></a>

```java
public java.lang.Number getInitialDelayInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}.

---

##### `intervalInSeconds`<sup>Optional</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}.

---

##### `statusDetails`<sup>Optional</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.statusDetails"></a>

```java
public java.lang.String getStatusDetails();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}.

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.successThreshold"></a>

```java
public java.lang.Number getSuccessThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}.

---

### ContainerInstancesContainerInstanceContainersHealthChecksHeaders <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders;

ContainerInstancesContainerInstanceContainersHealthChecksHeaders.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}.

---

### ContainerInstancesContainerInstanceContainersResourceConfig <a name="ContainerInstancesContainerInstanceContainersResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersResourceConfig;

ContainerInstancesContainerInstanceContainersResourceConfig.builder()
//  .memoryLimitInGbs(java.lang.Number)
//  .vcpusLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.memoryLimitInGbs">memoryLimitInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.vcpusLimit">vcpusLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}. |

---

##### `memoryLimitInGbs`<sup>Optional</sup> <a name="memoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.memoryLimitInGbs"></a>

```java
public java.lang.Number getMemoryLimitInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}.

---

##### `vcpusLimit`<sup>Optional</sup> <a name="vcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.vcpusLimit"></a>

```java
public java.lang.Number getVcpusLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}.

---

### ContainerInstancesContainerInstanceContainersSecurityContext <a name="ContainerInstancesContainerInstanceContainersSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersSecurityContext;

ContainerInstancesContainerInstanceContainersSecurityContext.builder()
//  .capabilities(ContainerInstancesContainerInstanceContainersSecurityContextCapabilities)
//  .isNonRootUserCheckEnabled(java.lang.Boolean)
//  .isNonRootUserCheckEnabled(IResolvable)
//  .isRootFileSystemReadonly(java.lang.Boolean)
//  .isRootFileSystemReadonly(IResolvable)
//  .runAsGroup(java.lang.Number)
//  .runAsUser(java.lang.Number)
//  .securityContextType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isNonRootUserCheckEnabled">isNonRootUserCheckEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isRootFileSystemReadonly">isRootFileSystemReadonly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsGroup">runAsGroup</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsUser">runAsUser</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.securityContextType">securityContextType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}. |

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.capabilities"></a>

```java
public ContainerInstancesContainerInstanceContainersSecurityContextCapabilities getCapabilities();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#capabilities ContainerInstancesContainerInstance#capabilities}

---

##### `isNonRootUserCheckEnabled`<sup>Optional</sup> <a name="isNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isNonRootUserCheckEnabled"></a>

```java
public java.lang.Object getIsNonRootUserCheckEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}.

---

##### `isRootFileSystemReadonly`<sup>Optional</sup> <a name="isRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isRootFileSystemReadonly"></a>

```java
public java.lang.Object getIsRootFileSystemReadonly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}.

---

##### `runAsGroup`<sup>Optional</sup> <a name="runAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsGroup"></a>

```java
public java.lang.Number getRunAsGroup();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}.

---

##### `runAsUser`<sup>Optional</sup> <a name="runAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsUser"></a>

```java
public java.lang.Number getRunAsUser();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}.

---

##### `securityContextType`<sup>Optional</sup> <a name="securityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.securityContextType"></a>

```java
public java.lang.String getSecurityContextType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}.

---

### ContainerInstancesContainerInstanceContainersSecurityContextCapabilities <a name="ContainerInstancesContainerInstanceContainersSecurityContextCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities;

ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.builder()
//  .addCapabilities(java.util.List<java.lang.String>)
//  .dropCapabilities(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.addCapabilities">addCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.dropCapabilities">dropCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}. |

---

##### `addCapabilities`<sup>Optional</sup> <a name="addCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.addCapabilities"></a>

```java
public java.util.List<java.lang.String> getAddCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}.

---

##### `dropCapabilities`<sup>Optional</sup> <a name="dropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.dropCapabilities"></a>

```java
public java.util.List<java.lang.String> getDropCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}.

---

### ContainerInstancesContainerInstanceContainersVolumeMounts <a name="ContainerInstancesContainerInstanceContainersVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersVolumeMounts;

ContainerInstancesContainerInstanceContainersVolumeMounts.builder()
    .mountPath(java.lang.String)
    .volumeName(java.lang.String)
//  .isReadOnly(java.lang.Boolean)
//  .isReadOnly(IResolvable)
//  .partition(java.lang.Number)
//  .subPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.isReadOnly">isReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.partition">partition</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.subPath">subPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}.

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}.

---

##### `isReadOnly`<sup>Optional</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.isReadOnly"></a>

```java
public java.lang.Object getIsReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}.

---

##### `subPath`<sup>Optional</sup> <a name="subPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.subPath"></a>

```java
public java.lang.String getSubPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}.

---

### ContainerInstancesContainerInstanceDnsConfig <a name="ContainerInstancesContainerInstanceDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceDnsConfig;

ContainerInstancesContainerInstanceDnsConfig.builder()
//  .nameservers(java.util.List<java.lang.String>)
//  .options(java.util.List<java.lang.String>)
//  .searches(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.nameservers">nameservers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.searches">searches</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}. |

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.nameservers"></a>

```java
public java.util.List<java.lang.String> getNameservers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}.

---

##### `searches`<sup>Optional</sup> <a name="searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.searches"></a>

```java
public java.util.List<java.lang.String> getSearches();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}.

---

### ContainerInstancesContainerInstanceImagePullSecrets <a name="ContainerInstancesContainerInstanceImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceImagePullSecrets;

ContainerInstancesContainerInstanceImagePullSecrets.builder()
    .registryEndpoint(java.lang.String)
    .secretType(java.lang.String)
//  .password(java.lang.String)
//  .secretId(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.registryEndpoint">registryEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretType">secretType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}. |

---

##### `registryEndpoint`<sup>Required</sup> <a name="registryEndpoint" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.registryEndpoint"></a>

```java
public java.lang.String getRegistryEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}.

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretType"></a>

```java
public java.lang.String getSecretType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}.

---

### ContainerInstancesContainerInstanceShapeConfig <a name="ContainerInstancesContainerInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceShapeConfig;

ContainerInstancesContainerInstanceShapeConfig.builder()
    .ocpus(java.lang.Number)
//  .memoryInGbs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}. |

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}.

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}.

---

### ContainerInstancesContainerInstanceTimeouts <a name="ContainerInstancesContainerInstanceTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceTimeouts;

ContainerInstancesContainerInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}.

---

### ContainerInstancesContainerInstanceVnics <a name="ContainerInstancesContainerInstanceVnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceVnics;

ContainerInstancesContainerInstanceVnics.builder()
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostnameLabel(java.lang.String)
//  .isPublicIpAssigned(java.lang.Boolean)
//  .isPublicIpAssigned(IResolvable)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateIp(java.lang.String)
//  .skipSourceDestCheck(java.lang.Boolean)
//  .skipSourceDestCheck(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.isPublicIpAssigned">isPublicIpAssigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}.

---

##### `isPublicIpAssigned`<sup>Optional</sup> <a name="isPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.isPublicIpAssigned"></a>

```java
public java.lang.Object getIsPublicIpAssigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}.

---

##### `skipSourceDestCheck`<sup>Optional</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.skipSourceDestCheck"></a>

```java
public java.lang.Object getSkipSourceDestCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}.

---

### ContainerInstancesContainerInstanceVolumes <a name="ContainerInstancesContainerInstanceVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceVolumes;

ContainerInstancesContainerInstanceVolumes.builder()
    .name(java.lang.String)
    .volumeType(java.lang.String)
//  .backingStore(java.lang.String)
//  .configs(IResolvable)
//  .configs(java.util.List<ContainerInstancesContainerInstanceVolumesConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.backingStore">backingStore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.configs">configs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>></code> | configs block. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}.

---

##### `backingStore`<sup>Optional</sup> <a name="backingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.backingStore"></a>

```java
public java.lang.String getBackingStore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}.

---

##### `configs`<sup>Optional</sup> <a name="configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.configs"></a>

```java
public java.lang.Object getConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>>

configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#configs ContainerInstancesContainerInstance#configs}

---

### ContainerInstancesContainerInstanceVolumesConfigs <a name="ContainerInstancesContainerInstanceVolumesConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceVolumesConfigs;

ContainerInstancesContainerInstanceVolumesConfigs.builder()
//  .data(java.lang.String)
//  .fileName(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.data">data</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.fileName">fileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}. |

---

##### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerInstancesContainerInstanceContainersHealthChecksHeadersList <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeadersList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList;

new ContainerInstancesContainerInstanceContainersHealthChecksHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get"></a>

```java
public ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>>

---


### ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference;

new ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>

---


### ContainerInstancesContainerInstanceContainersHealthChecksList <a name="ContainerInstancesContainerInstanceContainersHealthChecksList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersHealthChecksList;

new ContainerInstancesContainerInstanceContainersHealthChecksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get"></a>

```java
public ContainerInstancesContainerInstanceContainersHealthChecksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>>

---


### ContainerInstancesContainerInstanceContainersHealthChecksOutputReference <a name="ContainerInstancesContainerInstanceContainersHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference;

new ContainerInstancesContainerInstanceContainersHealthChecksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureAction">resetFailureAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetInitialDelayInSeconds">resetInitialDelayInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetIntervalInSeconds">resetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatusDetails">resetStatusDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<ContainerInstancesContainerInstanceContainersHealthChecksHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>>

---

##### `resetCommand` <a name="resetCommand" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetFailureAction` <a name="resetFailureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureAction"></a>

```java
public void resetFailureAction()
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureThreshold"></a>

```java
public void resetFailureThreshold()
```

##### `resetHeaders` <a name="resetHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetInitialDelayInSeconds` <a name="resetInitialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetInitialDelayInSeconds"></a>

```java
public void resetInitialDelayInSeconds()
```

##### `resetIntervalInSeconds` <a name="resetIntervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetIntervalInSeconds"></a>

```java
public void resetIntervalInSeconds()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetStatusDetails` <a name="resetStatusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatusDetails"></a>

```java
public void resetStatusDetails()
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetSuccessThreshold"></a>

```java
public void resetSuccessThreshold()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList">ContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureActionInput">failureActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSecondsInput">initialDelayInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetailsInput">statusDetailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction">failureAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds">initialDelayInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails">statusDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold">successThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers"></a>

```java
public ContainerInstancesContainerInstanceContainersHealthChecksHeadersList getHeaders();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList">ContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failureActionInput`<sup>Optional</sup> <a name="failureActionInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureActionInput"></a>

```java
public java.lang.String getFailureActionInput();
```

- *Type:* java.lang.String

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThresholdInput"></a>

```java
public java.lang.Number getFailureThresholdInput();
```

- *Type:* java.lang.Number

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>>

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckTypeInput"></a>

```java
public java.lang.String getHealthCheckTypeInput();
```

- *Type:* java.lang.String

---

##### `initialDelayInSecondsInput`<sup>Optional</sup> <a name="initialDelayInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSecondsInput"></a>

```java
public java.lang.Number getInitialDelayInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSecondsInput"></a>

```java
public java.lang.Number getIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `statusDetailsInput`<sup>Optional</sup> <a name="statusDetailsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetailsInput"></a>

```java
public java.lang.String getStatusDetailsInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThresholdInput"></a>

```java
public java.lang.Number getSuccessThresholdInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failureAction`<sup>Required</sup> <a name="failureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction"></a>

```java
public java.lang.String getFailureAction();
```

- *Type:* java.lang.String

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

---

##### `initialDelayInSeconds`<sup>Required</sup> <a name="initialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds"></a>

```java
public java.lang.Number getInitialDelayInSeconds();
```

- *Type:* java.lang.Number

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails"></a>

```java
public java.lang.String getStatusDetails();
```

- *Type:* java.lang.String

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold"></a>

```java
public java.lang.Number getSuccessThreshold();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>

---


### ContainerInstancesContainerInstanceContainersList <a name="ContainerInstancesContainerInstanceContainersList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersList;

new ContainerInstancesContainerInstanceContainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get"></a>

```java
public ContainerInstancesContainerInstanceContainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>>

---


### ContainerInstancesContainerInstanceContainersOutputReference <a name="ContainerInstancesContainerInstanceContainersOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersOutputReference;

new ContainerInstancesContainerInstanceContainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks">putHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig">putResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext">putSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetHealthChecks">resetHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetIsResourcePrincipalDisabled">resetIsResourcePrincipalDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetResourceConfig">resetResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetSecurityContext">resetSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHealthChecks` <a name="putHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks"></a>

```java
public void putHealthChecks(IResolvable OR java.util.List<ContainerInstancesContainerInstanceContainersHealthChecks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>>

---

##### `putResourceConfig` <a name="putResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig"></a>

```java
public void putResourceConfig(ContainerInstancesContainerInstanceContainersResourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---

##### `putSecurityContext` <a name="putSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext"></a>

```java
public void putSecurityContext(ContainerInstancesContainerInstanceContainersSecurityContext value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts"></a>

```java
public void putVolumeMounts(IResolvable OR java.util.List<ContainerInstancesContainerInstanceContainersVolumeMounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>>

---

##### `resetArguments` <a name="resetArguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetCommand` <a name="resetCommand" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHealthChecks` <a name="resetHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetHealthChecks"></a>

```java
public void resetHealthChecks()
```

##### `resetIsResourcePrincipalDisabled` <a name="resetIsResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetIsResourcePrincipalDisabled"></a>

```java
public void resetIsResourcePrincipalDisabled()
```

##### `resetResourceConfig` <a name="resetResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetResourceConfig"></a>

```java
public void resetResourceConfig()
```

##### `resetSecurityContext` <a name="resetSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetSecurityContext"></a>

```java
public void resetSecurityContext()
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetVolumeMounts"></a>

```java
public void resetVolumeMounts()
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetWorkingDirectory"></a>

```java
public void resetWorkingDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerId">containerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId">containerInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.exitCode">exitCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks">healthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList">ContainerInstancesContainerInstanceContainersHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig">resourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference">ContainerInstancesContainerInstanceContainersResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContext">securityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated">timeTerminated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList">ContainerInstancesContainerInstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecksInput">healthChecksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabledInput">isResourcePrincipalDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfigInput">resourceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContextInput">securityContextInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl">imageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled">isResourcePrincipalDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

---

##### `containerInstanceId`<sup>Required</sup> <a name="containerInstanceId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId"></a>

```java
public java.lang.String getContainerInstanceId();
```

- *Type:* java.lang.String

---

##### `exitCode`<sup>Required</sup> <a name="exitCode" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.exitCode"></a>

```java
public java.lang.Number getExitCode();
```

- *Type:* java.lang.Number

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks"></a>

```java
public ContainerInstancesContainerInstanceContainersHealthChecksList getHealthChecks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList">ContainerInstancesContainerInstanceContainersHealthChecksList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `resourceConfig`<sup>Required</sup> <a name="resourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig"></a>

```java
public ContainerInstancesContainerInstanceContainersResourceConfigOutputReference getResourceConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference">ContainerInstancesContainerInstanceContainersResourceConfigOutputReference</a>

---

##### `securityContext`<sup>Required</sup> <a name="securityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContext"></a>

```java
public ContainerInstancesContainerInstanceContainersSecurityContextOutputReference getSecurityContext();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeTerminated`<sup>Required</sup> <a name="timeTerminated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated"></a>

```java
public java.lang.String getTimeTerminated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts"></a>

```java
public ContainerInstancesContainerInstanceContainersVolumeMountsList getVolumeMounts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList">ContainerInstancesContainerInstanceContainersVolumeMountsList</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.argumentsInput"></a>

```java
public java.util.List<java.lang.String> getArgumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `healthChecksInput`<sup>Optional</sup> <a name="healthChecksInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecksInput"></a>

```java
public java.lang.Object getHealthChecksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>>

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrlInput"></a>

```java
public java.lang.String getImageUrlInput();
```

- *Type:* java.lang.String

---

##### `isResourcePrincipalDisabledInput`<sup>Optional</sup> <a name="isResourcePrincipalDisabledInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabledInput"></a>

```java
public java.lang.Object getIsResourcePrincipalDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceConfigInput`<sup>Optional</sup> <a name="resourceConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfigInput"></a>

```java
public ContainerInstancesContainerInstanceContainersResourceConfig getResourceConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---

##### `securityContextInput`<sup>Optional</sup> <a name="securityContextInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContextInput"></a>

```java
public ContainerInstancesContainerInstanceContainersSecurityContext getSecurityContextInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMountsInput"></a>

```java
public java.lang.Object getVolumeMountsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>>

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectoryInput"></a>

```java
public java.lang.String getWorkingDirectoryInput();
```

- *Type:* java.lang.String

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl"></a>

```java
public java.lang.String getImageUrl();
```

- *Type:* java.lang.String

---

##### `isResourcePrincipalDisabled`<sup>Required</sup> <a name="isResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled"></a>

```java
public java.lang.Object getIsResourcePrincipalDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>

---


### ContainerInstancesContainerInstanceContainersResourceConfigOutputReference <a name="ContainerInstancesContainerInstanceContainersResourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference;

new ContainerInstancesContainerInstanceContainersResourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetMemoryLimitInGbs">resetMemoryLimitInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetVcpusLimit">resetVcpusLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryLimitInGbs` <a name="resetMemoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetMemoryLimitInGbs"></a>

```java
public void resetMemoryLimitInGbs()
```

##### `resetVcpusLimit` <a name="resetVcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetVcpusLimit"></a>

```java
public void resetVcpusLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbsInput">memoryLimitInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimitInput">vcpusLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs">memoryLimitInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit">vcpusLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryLimitInGbsInput`<sup>Optional</sup> <a name="memoryLimitInGbsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbsInput"></a>

```java
public java.lang.Number getMemoryLimitInGbsInput();
```

- *Type:* java.lang.Number

---

##### `vcpusLimitInput`<sup>Optional</sup> <a name="vcpusLimitInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimitInput"></a>

```java
public java.lang.Number getVcpusLimitInput();
```

- *Type:* java.lang.Number

---

##### `memoryLimitInGbs`<sup>Required</sup> <a name="memoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs"></a>

```java
public java.lang.Number getMemoryLimitInGbs();
```

- *Type:* java.lang.Number

---

##### `vcpusLimit`<sup>Required</sup> <a name="vcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit"></a>

```java
public java.lang.Number getVcpusLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue"></a>

```java
public ContainerInstancesContainerInstanceContainersResourceConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---


### ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference <a name="ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference;

new ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetAddCapabilities">resetAddCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetDropCapabilities">resetDropCapabilities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddCapabilities` <a name="resetAddCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetAddCapabilities"></a>

```java
public void resetAddCapabilities()
```

##### `resetDropCapabilities` <a name="resetDropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetDropCapabilities"></a>

```java
public void resetDropCapabilities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilitiesInput">addCapabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilitiesInput">dropCapabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities">addCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities">dropCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addCapabilitiesInput`<sup>Optional</sup> <a name="addCapabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getAddCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dropCapabilitiesInput`<sup>Optional</sup> <a name="dropCapabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getDropCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `addCapabilities`<sup>Required</sup> <a name="addCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities"></a>

```java
public java.util.List<java.lang.String> getAddCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dropCapabilities`<sup>Required</sup> <a name="dropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities"></a>

```java
public java.util.List<java.lang.String> getDropCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue"></a>

```java
public ContainerInstancesContainerInstanceContainersSecurityContextCapabilities getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---


### ContainerInstancesContainerInstanceContainersSecurityContextOutputReference <a name="ContainerInstancesContainerInstanceContainersSecurityContextOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference;

new ContainerInstancesContainerInstanceContainersSecurityContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsNonRootUserCheckEnabled">resetIsNonRootUserCheckEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsRootFileSystemReadonly">resetIsRootFileSystemReadonly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsGroup">resetRunAsGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsUser">resetRunAsUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetSecurityContextType">resetSecurityContextType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapabilities` <a name="putCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities"></a>

```java
public void putCapabilities(ContainerInstancesContainerInstanceContainersSecurityContextCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---

##### `resetCapabilities` <a name="resetCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetIsNonRootUserCheckEnabled` <a name="resetIsNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsNonRootUserCheckEnabled"></a>

```java
public void resetIsNonRootUserCheckEnabled()
```

##### `resetIsRootFileSystemReadonly` <a name="resetIsRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsRootFileSystemReadonly"></a>

```java
public void resetIsRootFileSystemReadonly()
```

##### `resetRunAsGroup` <a name="resetRunAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsGroup"></a>

```java
public void resetRunAsGroup()
```

##### `resetRunAsUser` <a name="resetRunAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsUser"></a>

```java
public void resetRunAsUser()
```

##### `resetSecurityContextType` <a name="resetSecurityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetSecurityContextType"></a>

```java
public void resetSecurityContextType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilitiesInput">capabilitiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabledInput">isNonRootUserCheckEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonlyInput">isRootFileSystemReadonlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroupInput">runAsGroupInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUserInput">runAsUserInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextTypeInput">securityContextTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled">isNonRootUserCheckEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly">isRootFileSystemReadonly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup">runAsGroup</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser">runAsUser</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType">securityContextType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities"></a>

```java
public ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference getCapabilities();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilitiesInput"></a>

```java
public ContainerInstancesContainerInstanceContainersSecurityContextCapabilities getCapabilitiesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---

##### `isNonRootUserCheckEnabledInput`<sup>Optional</sup> <a name="isNonRootUserCheckEnabledInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabledInput"></a>

```java
public java.lang.Object getIsNonRootUserCheckEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRootFileSystemReadonlyInput`<sup>Optional</sup> <a name="isRootFileSystemReadonlyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonlyInput"></a>

```java
public java.lang.Object getIsRootFileSystemReadonlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runAsGroupInput`<sup>Optional</sup> <a name="runAsGroupInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroupInput"></a>

```java
public java.lang.Number getRunAsGroupInput();
```

- *Type:* java.lang.Number

---

##### `runAsUserInput`<sup>Optional</sup> <a name="runAsUserInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUserInput"></a>

```java
public java.lang.Number getRunAsUserInput();
```

- *Type:* java.lang.Number

---

##### `securityContextTypeInput`<sup>Optional</sup> <a name="securityContextTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextTypeInput"></a>

```java
public java.lang.String getSecurityContextTypeInput();
```

- *Type:* java.lang.String

---

##### `isNonRootUserCheckEnabled`<sup>Required</sup> <a name="isNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled"></a>

```java
public java.lang.Object getIsNonRootUserCheckEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRootFileSystemReadonly`<sup>Required</sup> <a name="isRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly"></a>

```java
public java.lang.Object getIsRootFileSystemReadonly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runAsGroup`<sup>Required</sup> <a name="runAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup"></a>

```java
public java.lang.Number getRunAsGroup();
```

- *Type:* java.lang.Number

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser"></a>

```java
public java.lang.Number getRunAsUser();
```

- *Type:* java.lang.Number

---

##### `securityContextType`<sup>Required</sup> <a name="securityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType"></a>

```java
public java.lang.String getSecurityContextType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue"></a>

```java
public ContainerInstancesContainerInstanceContainersSecurityContext getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---


### ContainerInstancesContainerInstanceContainersVolumeMountsList <a name="ContainerInstancesContainerInstanceContainersVolumeMountsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersVolumeMountsList;

new ContainerInstancesContainerInstanceContainersVolumeMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get"></a>

```java
public ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>>

---


### ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference <a name="ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference;

new ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetIsReadOnly">resetIsReadOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetSubPath">resetSubPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsReadOnly` <a name="resetIsReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetIsReadOnly"></a>

```java
public void resetIsReadOnly()
```

##### `resetPartition` <a name="resetPartition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetSubPath` <a name="resetSubPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```java
public void resetSubPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnlyInput">isReadOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPathInput">subPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly">isReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition">partition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath">subPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isReadOnlyInput`<sup>Optional</sup> <a name="isReadOnlyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnlyInput"></a>

```java
public java.lang.Object getIsReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partitionInput"></a>

```java
public java.lang.Number getPartitionInput();
```

- *Type:* java.lang.Number

---

##### `subPathInput`<sup>Optional</sup> <a name="subPathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```java
public java.lang.String getSubPathInput();
```

- *Type:* java.lang.String

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `isReadOnly`<sup>Required</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly"></a>

```java
public java.lang.Object getIsReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

---

##### `subPath`<sup>Required</sup> <a name="subPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```java
public java.lang.String getSubPath();
```

- *Type:* java.lang.String

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>

---


### ContainerInstancesContainerInstanceDnsConfigOutputReference <a name="ContainerInstancesContainerInstanceDnsConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceDnsConfigOutputReference;

new ContainerInstancesContainerInstanceDnsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetNameservers">resetNameservers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetSearches">resetSearches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNameservers` <a name="resetNameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetNameservers"></a>

```java
public void resetNameservers()
```

##### `resetOptions` <a name="resetOptions" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetSearches` <a name="resetSearches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetSearches"></a>

```java
public void resetSearches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameserversInput">nameserversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searchesInput">searchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches">searches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameserversInput"></a>

```java
public java.util.List<java.lang.String> getNameserversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.optionsInput"></a>

```java
public java.util.List<java.lang.String> getOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchesInput`<sup>Optional</sup> <a name="searchesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searchesInput"></a>

```java
public java.util.List<java.lang.String> getSearchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers"></a>

```java
public java.util.List<java.lang.String> getNameservers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searches`<sup>Required</sup> <a name="searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches"></a>

```java
public java.util.List<java.lang.String> getSearches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue"></a>

```java
public ContainerInstancesContainerInstanceDnsConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---


### ContainerInstancesContainerInstanceImagePullSecretsList <a name="ContainerInstancesContainerInstanceImagePullSecretsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceImagePullSecretsList;

new ContainerInstancesContainerInstanceImagePullSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get"></a>

```java
public ContainerInstancesContainerInstanceImagePullSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>>

---


### ContainerInstancesContainerInstanceImagePullSecretsOutputReference <a name="ContainerInstancesContainerInstanceImagePullSecretsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference;

new ContainerInstancesContainerInstanceImagePullSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetSecretId` <a name="resetSecretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetSecretId"></a>

```java
public void resetSecretId()
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpointInput">registryEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretTypeInput">secretTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint">registryEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType">secretType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `registryEndpointInput`<sup>Optional</sup> <a name="registryEndpointInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpointInput"></a>

```java
public java.lang.String getRegistryEndpointInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretTypeInput`<sup>Optional</sup> <a name="secretTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretTypeInput"></a>

```java
public java.lang.String getSecretTypeInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `registryEndpoint`<sup>Required</sup> <a name="registryEndpoint" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint"></a>

```java
public java.lang.String getRegistryEndpoint();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType"></a>

```java
public java.lang.String getSecretType();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>

---


### ContainerInstancesContainerInstanceShapeConfigOutputReference <a name="ContainerInstancesContainerInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceShapeConfigOutputReference;

new ContainerInstancesContainerInstanceShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">networkingBandwidthInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription">processorDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkingBandwidthInGbps`<sup>Required</sup> <a name="networkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```java
public java.lang.Number getNetworkingBandwidthInGbps();
```

- *Type:* java.lang.Number

---

##### `processorDescription`<sup>Required</sup> <a name="processorDescription" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription"></a>

```java
public java.lang.String getProcessorDescription();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.Number getMemoryInGbsInput();
```

- *Type:* java.lang.Number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```java
public java.lang.Number getOcpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue"></a>

```java
public ContainerInstancesContainerInstanceShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---


### ContainerInstancesContainerInstanceTimeoutsOutputReference <a name="ContainerInstancesContainerInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceTimeoutsOutputReference;

new ContainerInstancesContainerInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

---


### ContainerInstancesContainerInstanceVnicsList <a name="ContainerInstancesContainerInstanceVnicsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceVnicsList;

new ContainerInstancesContainerInstanceVnicsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get"></a>

```java
public ContainerInstancesContainerInstanceVnicsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>>

---


### ContainerInstancesContainerInstanceVnicsOutputReference <a name="ContainerInstancesContainerInstanceVnicsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceVnicsOutputReference;

new ContainerInstancesContainerInstanceVnicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetIsPublicIpAssigned">resetIsPublicIpAssigned</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetSkipSourceDestCheck">resetSkipSourceDestCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetHostnameLabel"></a>

```java
public void resetHostnameLabel()
```

##### `resetIsPublicIpAssigned` <a name="resetIsPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetIsPublicIpAssigned"></a>

```java
public void resetIsPublicIpAssigned()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetSkipSourceDestCheck` <a name="resetSkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetSkipSourceDestCheck"></a>

```java
public void resetSkipSourceDestCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId">vnicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssignedInput">isPublicIpAssignedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheckInput">skipSourceDestCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned">isPublicIpAssigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId"></a>

```java
public java.lang.String getVnicId();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabelInput"></a>

```java
public java.lang.String getHostnameLabelInput();
```

- *Type:* java.lang.String

---

##### `isPublicIpAssignedInput`<sup>Optional</sup> <a name="isPublicIpAssignedInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssignedInput"></a>

```java
public java.lang.Object getIsPublicIpAssignedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `skipSourceDestCheckInput`<sup>Optional</sup> <a name="skipSourceDestCheckInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheckInput"></a>

```java
public java.lang.Object getSkipSourceDestCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

---

##### `isPublicIpAssigned`<sup>Required</sup> <a name="isPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned"></a>

```java
public java.lang.Object getIsPublicIpAssigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `skipSourceDestCheck`<sup>Required</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck"></a>

```java
public java.lang.Object getSkipSourceDestCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>

---


### ContainerInstancesContainerInstanceVolumesConfigsList <a name="ContainerInstancesContainerInstanceVolumesConfigsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceVolumesConfigsList;

new ContainerInstancesContainerInstanceVolumesConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get"></a>

```java
public ContainerInstancesContainerInstanceVolumesConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>>

---


### ContainerInstancesContainerInstanceVolumesConfigsOutputReference <a name="ContainerInstancesContainerInstanceVolumesConfigsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference;

new ContainerInstancesContainerInstanceVolumesConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetFileName">resetFileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetData"></a>

```java
public void resetData()
```

##### `resetFileName` <a name="resetFileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetFileName"></a>

```java
public void resetFileName()
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>

---


### ContainerInstancesContainerInstanceVolumesList <a name="ContainerInstancesContainerInstanceVolumesList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceVolumesList;

new ContainerInstancesContainerInstanceVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get"></a>

```java
public ContainerInstancesContainerInstanceVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>>

---


### ContainerInstancesContainerInstanceVolumesOutputReference <a name="ContainerInstancesContainerInstanceVolumesOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.container_instances_container_instance.ContainerInstancesContainerInstanceVolumesOutputReference;

new ContainerInstancesContainerInstanceVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs">putConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetBackingStore">resetBackingStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetConfigs">resetConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigs` <a name="putConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs"></a>

```java
public void putConfigs(IResolvable OR java.util.List<ContainerInstancesContainerInstanceVolumesConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>>

---

##### `resetBackingStore` <a name="resetBackingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetBackingStore"></a>

```java
public void resetBackingStore()
```

##### `resetConfigs` <a name="resetConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetConfigs"></a>

```java
public void resetConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configs">configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList">ContainerInstancesContainerInstanceVolumesConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStoreInput">backingStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configsInput">configsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore">backingStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configs`<sup>Required</sup> <a name="configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configs"></a>

```java
public ContainerInstancesContainerInstanceVolumesConfigsList getConfigs();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList">ContainerInstancesContainerInstanceVolumesConfigsList</a>

---

##### `backingStoreInput`<sup>Optional</sup> <a name="backingStoreInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStoreInput"></a>

```java
public java.lang.String getBackingStoreInput();
```

- *Type:* java.lang.String

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configsInput"></a>

```java
public java.lang.Object getConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `backingStore`<sup>Required</sup> <a name="backingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore"></a>

```java
public java.lang.String getBackingStore();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>

---



