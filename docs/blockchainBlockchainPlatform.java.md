# `blockchainBlockchainPlatform` Submodule <a name="`blockchainBlockchainPlatform` Submodule" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockchainBlockchainPlatform <a name="BlockchainBlockchainPlatform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform oci_blockchain_blockchain_platform}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatform;

BlockchainBlockchainPlatform.Builder.create(Construct scope, java.lang.String id)
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
    .computeShape(java.lang.String)
    .displayName(java.lang.String)
    .idcsAccessToken(java.lang.String)
    .platformRole(java.lang.String)
//  .caCertArchiveText(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .federatedUserId(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isByol(java.lang.Boolean)
//  .isByol(IResolvable)
//  .loadBalancerShape(java.lang.String)
//  .platformVersion(java.lang.String)
//  .replicas(BlockchainBlockchainPlatformReplicas)
//  .storageSizeInTbs(java.lang.Number)
//  .timeouts(BlockchainBlockchainPlatformTimeouts)
//  .totalOcpuCapacity(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.computeShape">computeShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.idcsAccessToken">idcsAccessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.platformRole">platformRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.caCertArchiveText">caCertArchiveText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.federatedUserId">federatedUserId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.isByol">isByol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.loadBalancerShape">loadBalancerShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.storageSizeInTbs">storageSizeInTbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.totalOcpuCapacity">totalOcpuCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}.

---

##### `computeShape`<sup>Required</sup> <a name="computeShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.computeShape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}.

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.idcsAccessToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}.

---

##### `platformRole`<sup>Required</sup> <a name="platformRole" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.platformRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}.

---

##### `caCertArchiveText`<sup>Optional</sup> <a name="caCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.caCertArchiveText"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}.

---

##### `federatedUserId`<sup>Optional</sup> <a name="federatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.federatedUserId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isByol`<sup>Optional</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.isByol"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}.

---

##### `loadBalancerShape`<sup>Optional</sup> <a name="loadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.loadBalancerShape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}.

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.platformVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.replicas"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#replicas BlockchainBlockchainPlatform#replicas}

---

##### `storageSizeInTbs`<sup>Optional</sup> <a name="storageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.storageSizeInTbs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#timeouts BlockchainBlockchainPlatform#timeouts}

---

##### `totalOcpuCapacity`<sup>Optional</sup> <a name="totalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.totalOcpuCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas">putReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetCaCertArchiveText">resetCaCertArchiveText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFederatedUserId">resetFederatedUserId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetIsByol">resetIsByol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetLoadBalancerShape">resetLoadBalancerShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetReplicas">resetReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetStorageSizeInTbs">resetStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTotalOcpuCapacity">resetTotalOcpuCapacity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplicas` <a name="putReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas"></a>

```java
public void putReplicas(BlockchainBlockchainPlatformReplicas value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts"></a>

```java
public void putTimeouts(BlockchainBlockchainPlatformTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

---

##### `resetCaCertArchiveText` <a name="resetCaCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetCaCertArchiveText"></a>

```java
public void resetCaCertArchiveText()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFederatedUserId` <a name="resetFederatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFederatedUserId"></a>

```java
public void resetFederatedUserId()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetId"></a>

```java
public void resetId()
```

##### `resetIsByol` <a name="resetIsByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetIsByol"></a>

```java
public void resetIsByol()
```

##### `resetLoadBalancerShape` <a name="resetLoadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetLoadBalancerShape"></a>

```java
public void resetLoadBalancerShape()
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetPlatformVersion"></a>

```java
public void resetPlatformVersion()
```

##### `resetReplicas` <a name="resetReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetReplicas"></a>

```java
public void resetReplicas()
```

##### `resetStorageSizeInTbs` <a name="resetStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetStorageSizeInTbs"></a>

```java
public void resetStorageSizeInTbs()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTotalOcpuCapacity` <a name="resetTotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTotalOcpuCapacity"></a>

```java
public void resetTotalOcpuCapacity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatform;

BlockchainBlockchainPlatform.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatform;

BlockchainBlockchainPlatform.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatform;

BlockchainBlockchainPlatform.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatform;

BlockchainBlockchainPlatform.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BlockchainBlockchainPlatform.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BlockchainBlockchainPlatform to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BlockchainBlockchainPlatform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BlockchainBlockchainPlatform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.componentDetails">componentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList">BlockchainBlockchainPlatformComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo">hostOcpuUtilizationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList">BlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isMultiAd">isMultiAd</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformShapeType">platformShapeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference">BlockchainBlockchainPlatformReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceEndpoint">serviceEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceVersion">serviceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageUsedInTbs">storageUsedInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference">BlockchainBlockchainPlatformTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveTextInput">caCertArchiveTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShapeInput">computeShapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserIdInput">federatedUserIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessTokenInput">idcsAccessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByolInput">isByolInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShapeInput">loadBalancerShapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRoleInput">platformRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersionInput">platformVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicasInput">replicasInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbsInput">storageSizeInTbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacityInput">totalOcpuCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveText">caCertArchiveText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShape">computeShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserId">federatedUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessToken">idcsAccessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByol">isByol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShape">loadBalancerShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRole">platformRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbs">storageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacity">totalOcpuCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `componentDetails`<sup>Required</sup> <a name="componentDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.componentDetails"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsList getComponentDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList">BlockchainBlockchainPlatformComponentDetailsList</a>

---

##### `hostOcpuUtilizationInfo`<sup>Required</sup> <a name="hostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo"></a>

```java
public BlockchainBlockchainPlatformHostOcpuUtilizationInfoList getHostOcpuUtilizationInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList">BlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a>

---

##### `isMultiAd`<sup>Required</sup> <a name="isMultiAd" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isMultiAd"></a>

```java
public IResolvable getIsMultiAd();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `platformShapeType`<sup>Required</sup> <a name="platformShapeType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformShapeType"></a>

```java
public java.lang.String getPlatformShapeType();
```

- *Type:* java.lang.String

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicas"></a>

```java
public BlockchainBlockchainPlatformReplicasOutputReference getReplicas();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference">BlockchainBlockchainPlatformReplicasOutputReference</a>

---

##### `serviceEndpoint`<sup>Required</sup> <a name="serviceEndpoint" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceEndpoint"></a>

```java
public java.lang.String getServiceEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceVersion"></a>

```java
public java.lang.String getServiceVersion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageUsedInTbs`<sup>Required</sup> <a name="storageUsedInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageUsedInTbs"></a>

```java
public java.lang.Number getStorageUsedInTbs();
```

- *Type:* java.lang.Number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeouts"></a>

```java
public BlockchainBlockchainPlatformTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference">BlockchainBlockchainPlatformTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `caCertArchiveTextInput`<sup>Optional</sup> <a name="caCertArchiveTextInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveTextInput"></a>

```java
public java.lang.String getCaCertArchiveTextInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeShapeInput`<sup>Optional</sup> <a name="computeShapeInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShapeInput"></a>

```java
public java.lang.String getComputeShapeInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `federatedUserIdInput`<sup>Optional</sup> <a name="federatedUserIdInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserIdInput"></a>

```java
public java.lang.String getFederatedUserIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idcsAccessTokenInput`<sup>Optional</sup> <a name="idcsAccessTokenInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessTokenInput"></a>

```java
public java.lang.String getIdcsAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isByolInput`<sup>Optional</sup> <a name="isByolInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByolInput"></a>

```java
public java.lang.Object getIsByolInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancerShapeInput`<sup>Optional</sup> <a name="loadBalancerShapeInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShapeInput"></a>

```java
public java.lang.String getLoadBalancerShapeInput();
```

- *Type:* java.lang.String

---

##### `platformRoleInput`<sup>Optional</sup> <a name="platformRoleInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRoleInput"></a>

```java
public java.lang.String getPlatformRoleInput();
```

- *Type:* java.lang.String

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersionInput"></a>

```java
public java.lang.String getPlatformVersionInput();
```

- *Type:* java.lang.String

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicasInput"></a>

```java
public BlockchainBlockchainPlatformReplicas getReplicasInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---

##### `storageSizeInTbsInput`<sup>Optional</sup> <a name="storageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbsInput"></a>

```java
public java.lang.Number getStorageSizeInTbsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

---

##### `totalOcpuCapacityInput`<sup>Optional</sup> <a name="totalOcpuCapacityInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacityInput"></a>

```java
public java.lang.Number getTotalOcpuCapacityInput();
```

- *Type:* java.lang.Number

---

##### `caCertArchiveText`<sup>Required</sup> <a name="caCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveText"></a>

```java
public java.lang.String getCaCertArchiveText();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeShape`<sup>Required</sup> <a name="computeShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShape"></a>

```java
public java.lang.String getComputeShape();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `federatedUserId`<sup>Required</sup> <a name="federatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserId"></a>

```java
public java.lang.String getFederatedUserId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessToken"></a>

```java
public java.lang.String getIdcsAccessToken();
```

- *Type:* java.lang.String

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByol"></a>

```java
public java.lang.Object getIsByol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancerShape`<sup>Required</sup> <a name="loadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShape"></a>

```java
public java.lang.String getLoadBalancerShape();
```

- *Type:* java.lang.String

---

##### `platformRole`<sup>Required</sup> <a name="platformRole" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRole"></a>

```java
public java.lang.String getPlatformRole();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `storageSizeInTbs`<sup>Required</sup> <a name="storageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbs"></a>

```java
public java.lang.Number getStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `totalOcpuCapacity`<sup>Required</sup> <a name="totalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacity"></a>

```java
public java.lang.Number getTotalOcpuCapacity();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BlockchainBlockchainPlatformComponentDetails <a name="BlockchainBlockchainPlatformComponentDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetails;

BlockchainBlockchainPlatformComponentDetails.builder()
    .build();
```


### BlockchainBlockchainPlatformComponentDetailsOsns <a name="BlockchainBlockchainPlatformComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsOsns;

BlockchainBlockchainPlatformComponentDetailsOsns.builder()
    .build();
```


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam;

BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam.builder()
    .build();
```


### BlockchainBlockchainPlatformComponentDetailsPeers <a name="BlockchainBlockchainPlatformComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsPeers;

BlockchainBlockchainPlatformComponentDetailsPeers.builder()
    .build();
```


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam;

BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam.builder()
    .build();
```


### BlockchainBlockchainPlatformConfig <a name="BlockchainBlockchainPlatformConfig" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformConfig;

BlockchainBlockchainPlatformConfig.builder()
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
    .computeShape(java.lang.String)
    .displayName(java.lang.String)
    .idcsAccessToken(java.lang.String)
    .platformRole(java.lang.String)
//  .caCertArchiveText(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .federatedUserId(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isByol(java.lang.Boolean)
//  .isByol(IResolvable)
//  .loadBalancerShape(java.lang.String)
//  .platformVersion(java.lang.String)
//  .replicas(BlockchainBlockchainPlatformReplicas)
//  .storageSizeInTbs(java.lang.Number)
//  .timeouts(BlockchainBlockchainPlatformTimeouts)
//  .totalOcpuCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.computeShape">computeShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.idcsAccessToken">idcsAccessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformRole">platformRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.caCertArchiveText">caCertArchiveText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.federatedUserId">federatedUserId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.isByol">isByol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.loadBalancerShape">loadBalancerShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.storageSizeInTbs">storageSizeInTbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.totalOcpuCapacity">totalOcpuCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}.

---

##### `computeShape`<sup>Required</sup> <a name="computeShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.computeShape"></a>

```java
public java.lang.String getComputeShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}.

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.idcsAccessToken"></a>

```java
public java.lang.String getIdcsAccessToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}.

---

##### `platformRole`<sup>Required</sup> <a name="platformRole" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformRole"></a>

```java
public java.lang.String getPlatformRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}.

---

##### `caCertArchiveText`<sup>Optional</sup> <a name="caCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.caCertArchiveText"></a>

```java
public java.lang.String getCaCertArchiveText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}.

---

##### `federatedUserId`<sup>Optional</sup> <a name="federatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.federatedUserId"></a>

```java
public java.lang.String getFederatedUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isByol`<sup>Optional</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.isByol"></a>

```java
public java.lang.Object getIsByol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}.

---

##### `loadBalancerShape`<sup>Optional</sup> <a name="loadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.loadBalancerShape"></a>

```java
public java.lang.String getLoadBalancerShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}.

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.replicas"></a>

```java
public BlockchainBlockchainPlatformReplicas getReplicas();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#replicas BlockchainBlockchainPlatform#replicas}

---

##### `storageSizeInTbs`<sup>Optional</sup> <a name="storageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.storageSizeInTbs"></a>

```java
public java.lang.Number getStorageSizeInTbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.timeouts"></a>

```java
public BlockchainBlockchainPlatformTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#timeouts BlockchainBlockchainPlatform#timeouts}

---

##### `totalOcpuCapacity`<sup>Optional</sup> <a name="totalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.totalOcpuCapacity"></a>

```java
public java.lang.Number getTotalOcpuCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}.

---

### BlockchainBlockchainPlatformHostOcpuUtilizationInfo <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo;

BlockchainBlockchainPlatformHostOcpuUtilizationInfo.builder()
    .build();
```


### BlockchainBlockchainPlatformReplicas <a name="BlockchainBlockchainPlatformReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformReplicas;

BlockchainBlockchainPlatformReplicas.builder()
//  .caCount(java.lang.Number)
//  .consoleCount(java.lang.Number)
//  .proxyCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.caCount">caCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.consoleCount">consoleCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.proxyCount">proxyCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}. |

---

##### `caCount`<sup>Optional</sup> <a name="caCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.caCount"></a>

```java
public java.lang.Number getCaCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}.

---

##### `consoleCount`<sup>Optional</sup> <a name="consoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.consoleCount"></a>

```java
public java.lang.Number getConsoleCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}.

---

##### `proxyCount`<sup>Optional</sup> <a name="proxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.proxyCount"></a>

```java
public java.lang.Number getProxyCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}.

---

### BlockchainBlockchainPlatformTimeouts <a name="BlockchainBlockchainPlatformTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformTimeouts;

BlockchainBlockchainPlatformTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockchainBlockchainPlatformComponentDetailsList <a name="BlockchainBlockchainPlatformComponentDetailsList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsList;

new BlockchainBlockchainPlatformComponentDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BlockchainBlockchainPlatformComponentDetailsOsnsList <a name="BlockchainBlockchainPlatformComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsOsnsList;

new BlockchainBlockchainPlatformComponentDetailsOsnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList;

new BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference;

new BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpuAllocationNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ocpuAllocationNumber`<sup>Required</sup> <a name="ocpuAllocationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```java
public java.lang.Number getOcpuAllocationNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a>

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference;

new BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad">ad</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">ocpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey">osnKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns">BlockchainBlockchainPlatformComponentDetailsOsns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad"></a>

```java
public java.lang.String getAd();
```

- *Type:* java.lang.String

---

##### `ocpuAllocationParam`<sup>Required</sup> <a name="ocpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList getOcpuAllocationParam();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `osnKey`<sup>Required</sup> <a name="osnKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey"></a>

```java
public java.lang.String getOsnKey();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsOsns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns">BlockchainBlockchainPlatformComponentDetailsOsns</a>

---


### BlockchainBlockchainPlatformComponentDetailsOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsOutputReference;

new BlockchainBlockchainPlatformComponentDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns">osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList">BlockchainBlockchainPlatformComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers">peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList">BlockchainBlockchainPlatformComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails">BlockchainBlockchainPlatformComponentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `osns`<sup>Required</sup> <a name="osns" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsOsnsList getOsns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList">BlockchainBlockchainPlatformComponentDetailsOsnsList</a>

---

##### `peers`<sup>Required</sup> <a name="peers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsPeersList getPeers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList">BlockchainBlockchainPlatformComponentDetailsPeersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue"></a>

```java
public BlockchainBlockchainPlatformComponentDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails">BlockchainBlockchainPlatformComponentDetails</a>

---


### BlockchainBlockchainPlatformComponentDetailsPeersList <a name="BlockchainBlockchainPlatformComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsPeersList;

new BlockchainBlockchainPlatformComponentDetailsPeersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsPeersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList;

new BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference;

new BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpuAllocationNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ocpuAllocationNumber`<sup>Required</sup> <a name="ocpuAllocationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```java
public java.lang.Number getOcpuAllocationNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a>

---


### BlockchainBlockchainPlatformComponentDetailsPeersOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference;

new BlockchainBlockchainPlatformComponentDetailsPeersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad">ad</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam">ocpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey">peerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers">BlockchainBlockchainPlatformComponentDetailsPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad"></a>

```java
public java.lang.String getAd();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ocpuAllocationParam`<sup>Required</sup> <a name="ocpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList getOcpuAllocationParam();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `peerKey`<sup>Required</sup> <a name="peerKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey"></a>

```java
public java.lang.String getPeerKey();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue"></a>

```java
public BlockchainBlockchainPlatformComponentDetailsPeers getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers">BlockchainBlockchainPlatformComponentDetailsPeers</a>

---


### BlockchainBlockchainPlatformHostOcpuUtilizationInfoList <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList;

new BlockchainBlockchainPlatformHostOcpuUtilizationInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get"></a>

```java
public BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference;

new BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">ocpuCapacityNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">ocpuUtilizationNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo">BlockchainBlockchainPlatformHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ocpuCapacityNumber`<sup>Required</sup> <a name="ocpuCapacityNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```java
public java.lang.Number getOcpuCapacityNumber();
```

- *Type:* java.lang.Number

---

##### `ocpuUtilizationNumber`<sup>Required</sup> <a name="ocpuUtilizationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```java
public java.lang.Number getOcpuUtilizationNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```java
public BlockchainBlockchainPlatformHostOcpuUtilizationInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo">BlockchainBlockchainPlatformHostOcpuUtilizationInfo</a>

---


### BlockchainBlockchainPlatformReplicasOutputReference <a name="BlockchainBlockchainPlatformReplicasOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformReplicasOutputReference;

new BlockchainBlockchainPlatformReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetCaCount">resetCaCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetConsoleCount">resetConsoleCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetProxyCount">resetProxyCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCount` <a name="resetCaCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetCaCount"></a>

```java
public void resetCaCount()
```

##### `resetConsoleCount` <a name="resetConsoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetConsoleCount"></a>

```java
public void resetConsoleCount()
```

##### `resetProxyCount` <a name="resetProxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetProxyCount"></a>

```java
public void resetProxyCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCountInput">caCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCountInput">consoleCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCountInput">proxyCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCount">caCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount">consoleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount">proxyCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCountInput`<sup>Optional</sup> <a name="caCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCountInput"></a>

```java
public java.lang.Number getCaCountInput();
```

- *Type:* java.lang.Number

---

##### `consoleCountInput`<sup>Optional</sup> <a name="consoleCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCountInput"></a>

```java
public java.lang.Number getConsoleCountInput();
```

- *Type:* java.lang.Number

---

##### `proxyCountInput`<sup>Optional</sup> <a name="proxyCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCountInput"></a>

```java
public java.lang.Number getProxyCountInput();
```

- *Type:* java.lang.Number

---

##### `caCount`<sup>Required</sup> <a name="caCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCount"></a>

```java
public java.lang.Number getCaCount();
```

- *Type:* java.lang.Number

---

##### `consoleCount`<sup>Required</sup> <a name="consoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount"></a>

```java
public java.lang.Number getConsoleCount();
```

- *Type:* java.lang.Number

---

##### `proxyCount`<sup>Required</sup> <a name="proxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount"></a>

```java
public java.lang.Number getProxyCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.internalValue"></a>

```java
public BlockchainBlockchainPlatformReplicas getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---


### BlockchainBlockchainPlatformTimeoutsOutputReference <a name="BlockchainBlockchainPlatformTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.blockchain_blockchain_platform.BlockchainBlockchainPlatformTimeoutsOutputReference;

new BlockchainBlockchainPlatformTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

---



