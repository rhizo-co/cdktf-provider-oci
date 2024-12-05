# `dataOciDatabaseInfrastructureTargetVersion` Submodule <a name="`dataOciDatabaseInfrastructureTargetVersion` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseInfrastructureTargetVersion <a name="DataOciDatabaseInfrastructureTargetVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version oci_database_infrastructure_target_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_infrastructure_target_version.DataOciDatabaseInfrastructureTargetVersion;

DataOciDatabaseInfrastructureTargetVersion.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .targetResourceId(java.lang.String)
//  .targetResourceType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#compartment_id DataOciDatabaseInfrastructureTargetVersion#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#id DataOciDatabaseInfrastructureTargetVersion#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_id DataOciDatabaseInfrastructureTargetVersion#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_type DataOciDatabaseInfrastructureTargetVersion#target_resource_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#compartment_id DataOciDatabaseInfrastructureTargetVersion#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#id DataOciDatabaseInfrastructureTargetVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetResourceId`<sup>Optional</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.targetResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_id DataOciDatabaseInfrastructureTargetVersion#target_resource_id}.

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.targetResourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_type DataOciDatabaseInfrastructureTargetVersion#target_resource_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceId">resetTargetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetId"></a>

```java
public void resetId()
```

##### `resetTargetResourceId` <a name="resetTargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceId"></a>

```java
public void resetTargetResourceId()
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceType"></a>

```java
public void resetTargetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseInfrastructureTargetVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_infrastructure_target_version.DataOciDatabaseInfrastructureTargetVersion;

DataOciDatabaseInfrastructureTargetVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_infrastructure_target_version.DataOciDatabaseInfrastructureTargetVersion;

DataOciDatabaseInfrastructureTargetVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_infrastructure_target_version.DataOciDatabaseInfrastructureTargetVersion;

DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_infrastructure_target_version.DataOciDatabaseInfrastructureTargetVersion;

DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseInfrastructureTargetVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseInfrastructureTargetVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseInfrastructureTargetVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseInfrastructureTargetVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetDbVersionHistoryEntry">targetDbVersionHistoryEntry</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetStorageVersionHistoryEntry">targetStorageVersionHistoryEntry</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `targetDbVersionHistoryEntry`<sup>Required</sup> <a name="targetDbVersionHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetDbVersionHistoryEntry"></a>

```java
public java.util.List<java.lang.String> getTargetDbVersionHistoryEntry();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetStorageVersionHistoryEntry`<sup>Required</sup> <a name="targetStorageVersionHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetStorageVersionHistoryEntry"></a>

```java
public java.util.List<java.lang.String> getTargetStorageVersionHistoryEntry();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceIdInput"></a>

```java
public java.lang.String getTargetResourceIdInput();
```

- *Type:* java.lang.String

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceTypeInput"></a>

```java
public java.lang.String getTargetResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseInfrastructureTargetVersionConfig <a name="DataOciDatabaseInfrastructureTargetVersionConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_infrastructure_target_version.DataOciDatabaseInfrastructureTargetVersionConfig;

DataOciDatabaseInfrastructureTargetVersionConfig.builder()
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
//  .id(java.lang.String)
//  .targetResourceId(java.lang.String)
//  .targetResourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#compartment_id DataOciDatabaseInfrastructureTargetVersion#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#id DataOciDatabaseInfrastructureTargetVersion#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_id DataOciDatabaseInfrastructureTargetVersion#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_type DataOciDatabaseInfrastructureTargetVersion#target_resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#compartment_id DataOciDatabaseInfrastructureTargetVersion#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#id DataOciDatabaseInfrastructureTargetVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetResourceId`<sup>Optional</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_id DataOciDatabaseInfrastructureTargetVersion#target_resource_id}.

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_type DataOciDatabaseInfrastructureTargetVersion#target_resource_type}.

---



