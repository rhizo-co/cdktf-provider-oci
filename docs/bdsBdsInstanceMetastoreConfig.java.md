# `bdsBdsInstanceMetastoreConfig` Submodule <a name="`bdsBdsInstanceMetastoreConfig` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceMetastoreConfig <a name="BdsBdsInstanceMetastoreConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config oci_bds_bds_instance_metastore_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_metastore_config.BdsBdsInstanceMetastoreConfig;

BdsBdsInstanceMetastoreConfig.Builder.create(Construct scope, java.lang.String id)
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
    .bdsApiKeyId(java.lang.String)
    .bdsApiKeyPassphrase(java.lang.String)
    .bdsInstanceId(java.lang.String)
    .clusterAdminPassword(java.lang.String)
    .metastoreId(java.lang.String)
//  .activateTrigger(java.lang.Number)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(BdsBdsInstanceMetastoreConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsApiKeyId">bdsApiKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_id BdsBdsInstanceMetastoreConfig#bds_api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsApiKeyPassphrase">bdsApiKeyPassphrase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_passphrase BdsBdsInstanceMetastoreConfig#bds_api_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_instance_id BdsBdsInstanceMetastoreConfig#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#cluster_admin_password BdsBdsInstanceMetastoreConfig#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#metastore_id BdsBdsInstanceMetastoreConfig#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.activateTrigger">activateTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#activate_trigger BdsBdsInstanceMetastoreConfig#activate_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#display_name BdsBdsInstanceMetastoreConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#id BdsBdsInstanceMetastoreConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsApiKeyId`<sup>Required</sup> <a name="bdsApiKeyId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsApiKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_id BdsBdsInstanceMetastoreConfig#bds_api_key_id}.

---

##### `bdsApiKeyPassphrase`<sup>Required</sup> <a name="bdsApiKeyPassphrase" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsApiKeyPassphrase"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_passphrase BdsBdsInstanceMetastoreConfig#bds_api_key_passphrase}.

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_instance_id BdsBdsInstanceMetastoreConfig#bds_instance_id}.

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.clusterAdminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#cluster_admin_password BdsBdsInstanceMetastoreConfig#cluster_admin_password}.

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.metastoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#metastore_id BdsBdsInstanceMetastoreConfig#metastore_id}.

---

##### `activateTrigger`<sup>Optional</sup> <a name="activateTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.activateTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#activate_trigger BdsBdsInstanceMetastoreConfig#activate_trigger}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#display_name BdsBdsInstanceMetastoreConfig#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#id BdsBdsInstanceMetastoreConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#timeouts BdsBdsInstanceMetastoreConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetActivateTrigger">resetActivateTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts"></a>

```java
public void putTimeouts(BdsBdsInstanceMetastoreConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>

---

##### `resetActivateTrigger` <a name="resetActivateTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetActivateTrigger"></a>

```java
public void resetActivateTrigger()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_metastore_config.BdsBdsInstanceMetastoreConfig;

BdsBdsInstanceMetastoreConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_metastore_config.BdsBdsInstanceMetastoreConfig;

BdsBdsInstanceMetastoreConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_metastore_config.BdsBdsInstanceMetastoreConfig;

BdsBdsInstanceMetastoreConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_metastore_config.BdsBdsInstanceMetastoreConfig;

BdsBdsInstanceMetastoreConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BdsBdsInstanceMetastoreConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BdsBdsInstanceMetastoreConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BdsBdsInstanceMetastoreConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceMetastoreConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreType">metastoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference">BdsBdsInstanceMetastoreConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTriggerInput">activateTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyIdInput">bdsApiKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphraseInput">bdsApiKeyPassphraseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPasswordInput">clusterAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTrigger">activateTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyId">bdsApiKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphrase">bdsApiKeyPassphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metastoreType`<sup>Required</sup> <a name="metastoreType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreType"></a>

```java
public java.lang.String getMetastoreType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeouts"></a>

```java
public BdsBdsInstanceMetastoreConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference">BdsBdsInstanceMetastoreConfigTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `activateTriggerInput`<sup>Optional</sup> <a name="activateTriggerInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTriggerInput"></a>

```java
public java.lang.Number getActivateTriggerInput();
```

- *Type:* java.lang.Number

---

##### `bdsApiKeyIdInput`<sup>Optional</sup> <a name="bdsApiKeyIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyIdInput"></a>

```java
public java.lang.String getBdsApiKeyIdInput();
```

- *Type:* java.lang.String

---

##### `bdsApiKeyPassphraseInput`<sup>Optional</sup> <a name="bdsApiKeyPassphraseInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphraseInput"></a>

```java
public java.lang.String getBdsApiKeyPassphraseInput();
```

- *Type:* java.lang.String

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceIdInput"></a>

```java
public java.lang.String getBdsInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `clusterAdminPasswordInput`<sup>Optional</sup> <a name="clusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPasswordInput"></a>

```java
public java.lang.String getClusterAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>

---

##### `activateTrigger`<sup>Required</sup> <a name="activateTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTrigger"></a>

```java
public java.lang.Number getActivateTrigger();
```

- *Type:* java.lang.Number

---

##### `bdsApiKeyId`<sup>Required</sup> <a name="bdsApiKeyId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyId"></a>

```java
public java.lang.String getBdsApiKeyId();
```

- *Type:* java.lang.String

---

##### `bdsApiKeyPassphrase`<sup>Required</sup> <a name="bdsApiKeyPassphrase" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphrase"></a>

```java
public java.lang.String getBdsApiKeyPassphrase();
```

- *Type:* java.lang.String

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceMetastoreConfigConfig <a name="BdsBdsInstanceMetastoreConfigConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_metastore_config.BdsBdsInstanceMetastoreConfigConfig;

BdsBdsInstanceMetastoreConfigConfig.builder()
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
    .bdsApiKeyId(java.lang.String)
    .bdsApiKeyPassphrase(java.lang.String)
    .bdsInstanceId(java.lang.String)
    .clusterAdminPassword(java.lang.String)
    .metastoreId(java.lang.String)
//  .activateTrigger(java.lang.Number)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(BdsBdsInstanceMetastoreConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyId">bdsApiKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_id BdsBdsInstanceMetastoreConfig#bds_api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyPassphrase">bdsApiKeyPassphrase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_passphrase BdsBdsInstanceMetastoreConfig#bds_api_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_instance_id BdsBdsInstanceMetastoreConfig#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#cluster_admin_password BdsBdsInstanceMetastoreConfig#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#metastore_id BdsBdsInstanceMetastoreConfig#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.activateTrigger">activateTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#activate_trigger BdsBdsInstanceMetastoreConfig#activate_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#display_name BdsBdsInstanceMetastoreConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#id BdsBdsInstanceMetastoreConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsApiKeyId`<sup>Required</sup> <a name="bdsApiKeyId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyId"></a>

```java
public java.lang.String getBdsApiKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_id BdsBdsInstanceMetastoreConfig#bds_api_key_id}.

---

##### `bdsApiKeyPassphrase`<sup>Required</sup> <a name="bdsApiKeyPassphrase" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyPassphrase"></a>

```java
public java.lang.String getBdsApiKeyPassphrase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_passphrase BdsBdsInstanceMetastoreConfig#bds_api_key_passphrase}.

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_instance_id BdsBdsInstanceMetastoreConfig#bds_instance_id}.

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#cluster_admin_password BdsBdsInstanceMetastoreConfig#cluster_admin_password}.

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#metastore_id BdsBdsInstanceMetastoreConfig#metastore_id}.

---

##### `activateTrigger`<sup>Optional</sup> <a name="activateTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.activateTrigger"></a>

```java
public java.lang.Number getActivateTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#activate_trigger BdsBdsInstanceMetastoreConfig#activate_trigger}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#display_name BdsBdsInstanceMetastoreConfig#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#id BdsBdsInstanceMetastoreConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.timeouts"></a>

```java
public BdsBdsInstanceMetastoreConfigTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#timeouts BdsBdsInstanceMetastoreConfig#timeouts}

---

### BdsBdsInstanceMetastoreConfigTimeouts <a name="BdsBdsInstanceMetastoreConfigTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_metastore_config.BdsBdsInstanceMetastoreConfigTimeouts;

BdsBdsInstanceMetastoreConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#create BdsBdsInstanceMetastoreConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#delete BdsBdsInstanceMetastoreConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#update BdsBdsInstanceMetastoreConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#create BdsBdsInstanceMetastoreConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#delete BdsBdsInstanceMetastoreConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#update BdsBdsInstanceMetastoreConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceMetastoreConfigTimeoutsOutputReference <a name="BdsBdsInstanceMetastoreConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_metastore_config.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference;

new BdsBdsInstanceMetastoreConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>

---



